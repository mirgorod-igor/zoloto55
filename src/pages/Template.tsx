import { Link, Outlet } from 'react-router-dom'

import CatalogDropdown from './components/CatalogDropdown'

import Logo from '@/img/logo.svg?react'
import Search from '@/img/search.svg?react'
import Account from '@/img/account.svg?react'
import Cart from '@/img/cart.svg?react'
import Favorites from '@/img/favorites.svg?react'
import Location from '@/img/location.svg?react'


import '@/style/template.sass'



const Menu = () => {
    return <ul className='row between uppercase fs18 fw6 catalog:menu'>
        <Link to='catalog/koltsa'>кольца</Link>
        <Link to='catalog/sergi'>серьги</Link>
        <Link to='catalog/tsepochki'>цепи</Link>
        <Link to='catalog/pomolvka-i-svadba'>помолвка и свадьба</Link>
        <Link to='catalog/podarki'>подарки</Link>
        <span className='divider'></span>
        <Link to='catalog/aktsii'>акции</Link>
        <Link to='catalog/novinka'>новинки</Link>
        <Link to='catalog/discount'>скидки</Link>
    </ul>
}


const Footer = () =>
    <footer>
        <div>
            <b>О компании</b>
            <ul>
                <li><a href=''>О нас</a></li>
                <li><a href=''>Наши салоны</a></li>
                <li><a href=''>Вакансии</a></li>
                <li><a href=''>Франшиза</a></li>
                <li><a href=''>Договор оферты</a></li>
                <li><a href=''>Блог</a></li>
            </ul>
        </div>
        <div>
            <b>Покупателям</b>
            <ul>
                <li><a href=''>Каталог</a></li>
                <li><a href=''>Акции</a></li>
                <li><a href=''>Скидки</a></li>
                <li><a href=''>Отзывы</a></li>
                <li><a href=''>Советы ювелира</a></li>
                <li><a href=''>Вопросы и ответы</a></li>
                <li><a href=''>Доставка и оплата</a></li>
                <li><a href=''>Кредит и рассрочка</a></li>
                <li><a href=''>Гарантия и возврат</a></li>
                <li><a href=''>Скупка и обмен</a></li>
                <li><a href=''>Программа лояльности</a></li>
                <li><a href=''>Подарочные сертификаты</a></li>
            </ul>
        </div>
        <div>
            <b>Свяжитесь с нами</b>
            <a href='tel:8-800-2500-577' className='fs22 fw6'>8-800-2500-577</a>
            <small className='fs14 gray'>Единая горячая линия</small>
            <a className='pointer'><small className='fw5'>Заказать обратный звонок</small></a>
            <small>© 2000—2024 «Россювелирторг»</small>
        </div>
    </footer>





const Header = () => {
    return <div className='top'>
        <div className='menu:top'>
            <a href='tel:8-800-2500-577'>8-800-2500-577</a>
            <span>Единая горячая линия</span>
            <div>
                <a href='buyer'>Покупателям</a>
                <a href='points'>Салоны</a>
                <a href='pay'>Доставка и оплата</a>
                <a href='vacancies'>Вакансии</a>
                <a href='blog'>Блог</a>
            </div>
        </div>
        <header>
            <div className='first'>
                <div className='left'><Location />Ваш город:</div>
                <a href='/'>
                    <Logo />
                </a>
                <div className='right'>
                    <Search />
                    <Account />
                    <Cart />
                    <Favorites />
                </div>
            </div>
            <div className='second'>
                <div className='catalog:button'>
                    <Link to='catalog'>каталог</Link>
                    <CatalogDropdown />
                </div>
                <Menu />
            </div>
        </header>
    </div>
}



const Main = () => <>
    <Header />
    <main>
        <Outlet />
    </main>
    <Footer />
</>



export default Main
