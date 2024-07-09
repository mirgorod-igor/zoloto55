import { Outlet, useParams } from 'react-router'


import List from './components/List'

import '../../style/catalog/category.sass'




const names = {
    koltsa: 'кольца',
    sergi: 'серьги',
    tsepochki: 'цепи',
    'pomolvka-i-svadba': 'помолвка и свадьба',
    podarki: 'подарки',
    aktsii: 'акции',
    novinka: 'новинки',
    discount: 'скидки'

}


const Main = () => {
    const {cat} = useParams()


    return <>
        <Outlet />
        <h1>{names[cat!] ?? 'каталог ювелирных украшений'}</h1>
        <List />
    </>
}


export default Main

