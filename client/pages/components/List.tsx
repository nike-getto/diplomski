import { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

import ListItem from './ListItem'
import { cadets } from '../../assets/cadets'

type Props = {}

export default function List({}: Props) {
	const [text] = useTypewriter({
		words: [
			'Студенти смера информациони системи',
			'144. класа Војне академије',
		],
		loop: 0,
		delaySpeed: 2000,
	})

	function mapCadets(
		cadets: {
			id: number
			name: string
			surname: string
			grade: string
			birthplace: string
			img: StaticImageData
		}[]
	) {
		cadets = cadets.sort((cd1, cd2) => {
			if (cd1.surname < cd2.surname) {
				return cd1.surname.localeCompare(cd2.surname)
			}
		})

		return cadets.map((cadet) => {
			return (
				<ListItem
					key={cadet.id}
					name={cadet.name}
					surname={cadet.surname}
					grade={cadet.grade}
					birthplace={cadet.birthplace}
					img={cadet.img}
				/>
			)
		})
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 2.5 }}
		>
			<span className='flex flex-row items-center justify-center text-3xl bold'>
				{text}
				<Cursor cursorColor='#9ca3af' />
			</span>
			<div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory h-[670px]'>
				{mapCadets(cadets)}
			</div>
		</motion.div>
	)
}
