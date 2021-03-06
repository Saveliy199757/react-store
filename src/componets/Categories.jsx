import {useState} from "react";

function Categories() {
    const [activeIndex, setActiveIndex] = useState(0);

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((item, i) =>
                        <li key={i} onClick={() => setActiveIndex(i)} className={activeIndex === i ? 'active' : ''} >{item}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default Categories