import { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'


import Banner1 from '../img/banners/2kdmp8fnhhqf6xa4srhf1hb74ng6skjl.webp'
import Banner2 from '../img/banners/jk234clrw2z0dlfp4m3ajkd419ojawqi.webp'

import J1 from '../img/jewerly/9e91tjthwxvc2tg3b9a3jii38k93r6pc.webp'


import '../style/home.sass'



const banners = [
    {
        img: Banner1,
        url: 'https://youtube.com',
        desc: ''
    },
    {
        img: Banner2,
        url: 'https://youtube.com',
        desc: ''
    }
]



type ContainerProps = {
    className?
    children: ReactNode
    slides?: number
    spaceBetween?: number
    navigation?: boolean
    pagination?: boolean
}


const SwiperContainer = (p: ContainerProps) =>
    <swiper-container class={p.className} space-between={p.spaceBetween} slides-per-view={p.slides} loop navigation={p.navigation} pagination={p.pagination}>
        {p.children}
    </swiper-container>

const SwiperSlide = p => <swiper-slide lazy>{p.children}</swiper-slide>



const Swiper = () => {

    return <SwiperContainer className='main-swiper' navigation pagination>
        {
            banners.map((it, i) =>
                <SwiperSlide key={i}>
                    <a href={it.url}><img src={it.img} /></a>
                </SwiperSlide>
            )
        }
    </SwiperContainer>
}


const jewerly = [
    {
        img: J1,
        url: '',
        desc: 'серьги'
    },
    {
        img: J1,
        url: '',
        desc: 'кольца'
    },
    {
        img: J1,
        url: '',
        desc: 'цепи'
    },
    {
        img: J1,
        url: '',
        desc: 'подвески'
    },
    {
        img: J1,
        url: '',
        desc: 'браслеты'
    },
    {
        img: J1,
        url: '',
        desc: 'обручальные кольца'
    }
]


const JewelrySwiper = () => {
    return <SwiperContainer className='jewelry-swiper' slides={4} spaceBetween={20}>
        {
            jewerly.map((it, i) =>
                <SwiperSlide key={i}>
                    <a href={it.url}>
                        <img src={it.img} />
                        <b>{it.desc}</b>
                    </a>
                </SwiperSlide>
            )
        }
    </SwiperContainer>
}



const Main = () => {

    return <>
        <Outlet />
        <Swiper />
        <h2>Ювелирные изделия</h2>
        <JewelrySwiper />
    </>
}


export default Main