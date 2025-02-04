import { useState, useEffect } from 'react';
import { Shimmer } from './Shimmer';
import { swiggyMenu } from '../utils/constant';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';

export const ResturantMenu = () => {
	const [restInfo, setRestInfo] = useState(null);
	const { resId } = useParams();
	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		try {
			const response = await axios.get(swiggyMenu + resId);
			console.log(response);
			const resturantInfo = _.get(response, 'data.data');
			console.log(resturantInfo);
			setRestInfo(resturantInfo);
		} catch (error) {
			console.error('Error fetching menu:', error);
		}
	};

	if (!restInfo) return <Shimmer />;
	const { name, cuisines, costForTwoMessage } =
		restInfo.cards[2].card.card.info;
	const itemCards =
		restInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
			.itemCards;
	console.log(itemCards);

	return (
		<div>
			<h1>{name}</h1>
			<h2>{cuisines.join(', ')}</h2>
			<h2>{costForTwoMessage}</h2>
			<h2>Menu</h2>
			<ul>
				{itemCards.map((item) => (
					<li key={item.card.info.id}>
						{item.card.info.name} -{' '}
						{(item.card.info.defaultPrice
							? item.card.info.defaultPrice
							: item.card.info.price) / 100}{' '}
						Rs
					</li>
				))}
			</ul>
		</div>
	);
};
