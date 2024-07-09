type Props = {
    items
    itemMap
}


const List = (p: Props) => {

    return <div>
        {
            p.items.map(() => {
                return <span></span>
            })
        }
    </div>
}


export default List