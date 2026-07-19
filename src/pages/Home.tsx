import { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
 
import * as home from '@/model/home'

import Ok from '@/img/ok.svg?react'
import Percent from '@/img/percent.svg?react'
import Delivery from '@/img/delivery.svg?react'
import Payment from '@/img/payment.svg?react'


import '../style/home.sass'




type ContainerProps = {
    className?
    children: ReactNode
    slides?: number
    spaceBetween?: number
    navigation?: boolean
    pagination?: boolean
    observer?: boolean
    observeParents?: boolean
}


const SwiperContainer = (p: ContainerProps) =>
    <swiper-container class={p.className} space-between={p.spaceBetween} slides-per-view={p.slides} loop navigation={p.navigation} pagination={p.pagination}>
        {p.children}
    </swiper-container>

const SwiperSlide = p => <swiper-slide lazy>{p.children}</swiper-slide>



const Swiper = () => {
    const items = home.useBanners()

    return <SwiperContainer className='main-swiper' navigation pagination>
        {
            items.map((it, i) =>
                <SwiperSlide key={i}>
                    <a href={it.url}><img src={'/img/banners/'+it.img} /></a>
                </SwiperSlide>
            )
        }
    </SwiperContainer>
}



const JewelrySwiper = () => {
    const items = home.useJewerly()

    return <SwiperContainer className='jewelry-swiper' slides={4} spaceBetween={18}>
        {
            items.map((it, i) =>
                <SwiperSlide key={i}>
                    <a href={it.url}>
                        <img src={'/img/jewerly/' + it.img} />
                        <b>{it.desc}</b>
                    </a>
                </SwiperSlide>
            )
        }
    </SwiperContainer>
}



const Grid = () => {

    return <div className='grid'>
        <span>
            <h2>Коллекции</h2>
            <small>Для наших любимых покупателей мы отбираем лучшие коллекции российских и мировых производителей. В нашем ассортименте представлены украшения на любой вкус: от классики до последних трендов.</small>
        </span>
        <a href='youtube.com' style={{ backgroundImage: 'url(/img/g9u2fo8hn6gpk81fzy55o51wk1hn7sxp.webp)' }}>
            <small>Самые актуальные украшения прямо сейчас</small>
            <h2>Тренды</h2>
        </a>
        <a style={{ backgroundImage: 'url(/img/724sz8opuhk6ultqwfe0faxdheenm8up.webp' }}>
            <small>Ювелирный символ вашей&nbsp;любви</small>
            <h2>Обручальные кольца</h2>
        </a>
        <a style={{ backgroundImage: 'url(/img/voeb4ox11jmrf5bh91ighzq75ebugv6e.webp)' }}>
            <small>Новая коллекция нашего бренда</small>
            <h2>ЭТОКРАСИВО.</h2>
        </a>
        <a style={{ backgroundImage: 'url(/img/9fqndrbzc6o1203xexmfynebqgfxht9v.webp)' }}>
            <small>Стильные украшения<br/>для настоящих мужчин</small>
            <h2>Мужская коллекция</h2>
        </a>
        <a style={{ backgroundImage: 'url(/img/1z08nbbbtrls5lxl4s2c7ku6q1lowqq2.webp)' }}>
            <small>Украшения для маленьких<br/>принцесс</small>
            <h2>Детская коллекция</h2>
        </a>
    </div>
}

const CompanyReviews = () => {
    const items = home.useCompanyReviews()

    return items.map((it, i) => <li key={i}>
        <div>
            <b>{it.client}</b>
            <small>г. {it.city}&nbsp;&nbsp;&nbsp;{it.date}</small>
        </div>
        <span>{it.review}</span>
        <a><b>Читать весь отзыв</b></a>
    </li>)
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
            <Grid />
        </section>

        <section>
            <h2>Отзывы о компании</h2>
            <ul className='reviews'>
            <CompanyReviews />
            </ul>
        </section>
    </>
}


export default Main