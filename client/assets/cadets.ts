import { StaticImageData } from 'next/image'
import glavudzaJa from './glavudza.png'

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
		img: glavudzaJa,
	},
	{
		id: 1,
		name: 'Михаило',
		surname: 'Томић',
		grade: '6.00',
		birthplace: 'Чачак',
		img: glavudzaJa,
	},
	{
		id: 2,
		name: 'Мирослав',
		surname: 'Сабо',
		grade: '6.00',
		birthplace: 'Стара Пазова',
		img: glavudzaJa,
	},
	{
		id: 3,
		name: 'Стефан',
		surname: 'Ивановић',
		grade: '6.00',
		birthplace: 'Шабац',
		img: glavudzaJa,
	},
	{
		id: 4,
		name: 'Никола',
		surname: 'Ћитић',
		birthplace: 'Крагујевац',
		grade: '6.00',
		img: glavudzaJa,
	},
	{
		id: 5,
		name: 'Бранислав',
		surname: 'Белотић',
		birthplace: 'Нови Сад',
		grade: '6.00',
		img: glavudzaJa,
	},
	{
		id: 6,
		name: 'Ђорђе',
		surname: 'Цвијановић',
		birthplace: 'Добој',
		grade: '6.00',
		img: glavudzaJa,
	},
	{
		id: 7,
		name: 'Немања',
		surname: 'Каплановић',
		birthplace: 'Смедерево',
		grade: '6.00',
		img: glavudzaJa,
	},
	{
		id: 8,
		name: 'Милица',
		surname: 'Маринковић',
		birthplace: 'Нови Пазар',
		grade: '6.00',
		img: glavudzaJa,
	},
]
