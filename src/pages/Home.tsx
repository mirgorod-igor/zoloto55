import { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'


 
import J1 from '../img/jewerly/9e91tjthwxvc2tg3b9a3jii38k93r6pc.webp'

import Ok from '@/img/ok.svg?react'
import Percent from '@/img/percent.svg?react'
import Delivery from '@/img/delivery.svg?react'
import Payment from '@/img/payment.svg?react'


import '../style/home.sass'
import { atom } from 'nanostores'
import { useStore } from '@nanostores/react'



const $banners = atom<Banner[]>([])


async function fetchUserData() {
  const url = 'banners.json'
  
  try {
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    
    const data = await response.json();
    console.log(data);

    $banners.set([...data])
    
  } catch (error) {
    console.error('Fetch operation failed:', error)
  }
}
debugger
fetchUserData()


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
    const banners = useStore($banners)

    return <SwiperContainer className='main-swiper' navigation pagination>
        {
            banners.map((it, i) =>
                <SwiperSlide key={i}>
                    <a href={it.url}><img src={'/img/banners/'+it.img} /></a>
                </SwiperSlide>
            )
        }
    </SwiperContainer>
}


const jewerly = [
    {
        img: J1,
        url: '',
        desc: 'браслеты'
    },
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
        desc: 'обручальные кольца'
    }
]




const companyReviews = [
    {
        client: 'Боярская Ольга Ивановна',
        city: 'Москва',
        date: '15.04.2026',
        review: 'Сегодня приобрела себе цепочку из белого золота , 45 разм . Обслуживание на высшем уровне . Спасибо Всем !'
    },
    {
        client: 'Газарян Светлана',
        city: 'Омск',
        date: '04.06.2026',
        review: 'Обменивала старе на новое, всё доступно объяснили. Покупкой довольна, спасибо.'
    },
    {
        client: 'Максим',
        city: 'Омск',
        date: '04.06.2026',
        review: 'Сегодня приобрёл подарок для жены серьги и кулон. Продавец консультант Юлия Владимировна просто профессионал своего дела ей нужно давать премию за это. Приобрет...'
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
        <section>
            <Swiper />
            <ul className='conditions'>
                <li><Ok /> Гарантия на весь товар</li>
                <li><Percent />Рассрочка 12 месяцев</li>
                <li><Delivery />Доставка от 1-го дня</li>
                <li><Payment />Оплата после примерки</li>
            </ul>
        </section>
        <section>
            <h2>Ювелирные изделия</h2>
            <JewelrySwiper />
        </section>

        <section>
            <h2>Отзывы о компании</h2>
            <ul className='reviews'>
            {
                companyReviews.map((it, i) => <li key={i}>
                    <div>
                        <b>{it.client}</b>
                        <small>г. {it.city}&nbsp;&nbsp;&nbsp;{it.date}</small>
                    </div>
                    <span>{it.review}</span>
                    <a><b>Читать весь отзыв</b></a>
                </li>)
            }
            </ul>
        </section>
    </>
}


export default Main