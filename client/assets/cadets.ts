import { StaticImageData } from 'next/image'

import sava from './cadetImages/glavudza.png'
import mihailo from './cadetImages/mihailoTomic.jpg'
import miroslav from './cadetImages/miroslavSabo.jpg'
import stefan from './cadetImages/stefanIvanovic.jpg'
import nikola from './cadetImages/nikolaCitic.jpg'
import nemanja from './cadetImages/nemanjaKaplanovic.jpg'
import milica from './cadetImages/milicaMarinkovic.jpg'
import djordje from './cadetImages/djordjeCvijanovic.jpg'
import branislav from './cadetImages/branislavBelotic.jpg'

export let cadets: {
	id: number
	name: string
	surname: string
	grade: string
	birthplace: string
	img: StaticImageData
}[] = [
	{
		id: 0,
		name: 'Сава',
		surname: 'Станишић',
		grade: '6.00',
		birthplace: 'Ужице',
		img: sava,
	},
	{
		id: 1,
		name: 'Михаило',
		surname: 'Томић',
		grade: '6.00',
		birthplace: 'Чачак',
		img: mihailo,
	},
	{
		id: 2,
		name: 'Мирослав',
		surname: 'Сабо',
		grade: '6.00',
		birthplace: 'Стара Пазова',
		img: miroslav,
	},
	{
		id: 3,
		name: 'Стефан',
		surname: 'Ивановић',
		grade: '6.00',
		birthplace: 'Шабац',
		img: stefan,
	},
	{
		id: 4,
		name: 'Никола',
		surname: 'Ћитић',
		birthplace: 'Крагујевац',
		grade: '6.00',
		img: nikola,
	},
	{
		id: 5,
		name: 'Бранислав',
		surname: 'Белотић',
		birthplace: 'Нови Сад',
		grade: '6.00',
		img: branislav,
	},
	{
		id: 6,
		name: 'Ђорђе',
		surname: 'Цвијановић',
		birthplace: 'Добој',
		grade: '6.00',
		img: djordje,
	},
	{
		id: 7,
		name: 'Немања',
		surname: 'Каплановић',
		birthplace: 'Смедерево',
		grade: '6.00',
		img: nemanja,
	},
	{
		id: 8,
		name: 'Милица',
		surname: 'Маринковић',
		birthplace: 'Нови Пазар',
		grade: '6.00',
		img: milica,
	},
]
