import { useState, useEffect } from "react"
import axios from "axios"
import _ from 'lodash'

export const ResturantMenu = () => {
    const [restInfo, setRestInfo] = useState(null);
    const swiggyMenu = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.526302&lng=80.64946&restaurantId=646830&catalog_qa=undefined&submitAction=ENTER'

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const response = await axios.get(swiggyMenu);
            const resturantInfo = _.get(response, 'data.data.cards[2].card.card.info');
            console.log(resturantInfo);
            setRestInfo(resturantInfo);
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    }

    if (!restInfo) return <div>Loading...</div>;

    return (
        <div>
            <h1>{restInfo.name}</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Dal Makhni</li>
                <li>Mutton Biryani</li>
                <li>Panner Burji</li>
            </ul>
        </div>
    );
}
