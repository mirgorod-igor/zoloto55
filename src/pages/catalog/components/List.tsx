import { useStore } from '@nanostores/react'
import { atom } from 'nanostores'

import _1 from '@/img/catalog/1.jpg'
import _2 from '@/img/catalog/2.jpg'
import _3 from '@/img/catalog/3.jpg'
import _4 from '@/img/catalog/4.webp'
import _5 from '@/img/catalog/5.jpg'
import _6 from '@/img/catalog/6.jpg'


import '@/style/catalog/home.sass'



type Item = {
    img
    desc
    url
    price
    oldPrice
    disc
}



export const $items = atom<Item[]>([])



export const fetch = () => {
    $items.set([
        {
            url: '',
            desc: 'Кольцо 1104742 золото Тиффани цифры',
            img: _1,
            price: 9089,
            oldPrice: 18178,
            disc: 50
        },
        {
            url: '',
            desc: 'Серьги подвесные SL-E01809-X-W-X-X-W серебро Дорожка',
            img: _2,
            price: 2697,
            oldPrice: 8991,
            disc: 70
        },
        {
            url: '',
            desc: 'Браслет жесткий 09-12-5499-31-00 золото',
            img: _3,
            price: 145800,
            oldPrice: 162000,
            disc: 10
        },
        {
            url: '',
            desc: 'Серьги серьга одиночная 94170341 серебро Звезда',
            img: _4,
            price: 2631,
            oldPrice: 3095,
            disc: 15
        },
        {
            url: '',
            desc: 'Подвеска п818-69-01 золото',
            img: _5,
            price: 25702,
            oldPrice: 32128,
            disc: 20
        },
        {
            url: '',
            desc: 'Кольцо 026171-1102 золото',
            img: _6,
            price: 36300,
            oldPrice: 45375,
            disc: 20
        }
    ])
}



const List = () => {

    const items = useStore($items)

    return <div className='catalog:list'>
        {
            items.map((it, i) =>
                <div key={i} >
                    <a href={it.url}>
                        <img src={it.img} />
                    </a>
                    <a href={it.url}>
                        <span>{it.desc}</span>
                    </a>
                    <div className='row between'>
                        <b className='fs18'>{it.price} ₽</b>
                        <s>{it.oldPrice} ₽</s>
                        <i>-{it.disc}%</i>
                    </div>
                    <section className='col gap:r:8'>
                        <a>в корзину</a>
                        <a>купить в один клик</a>
                    </section>
                </div>
            )
        }
    </div>
}


export default List