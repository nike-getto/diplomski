import { Button, Card, useModal } from '@nextui-org/react'
import Image, { StaticImageData } from 'next/image'

import DataModal from './DataModal'

type Props = {
	name: string
	surname: string
	grade: string
	birthplace: string
	img: StaticImageData
}

export default function ListItem({
	name,
	surname,
	grade,
	birthplace,
	img,
}: Props) {
	const { setVisible, bindings } = useModal()

	return (
		<div
			className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 snap-center bg-[#292929] p-10 
            hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden'
		>
			<Card>
				<Image
					className='w-auto'
					src={img}
					height={340}
					alt='glavudza'
				/>
			</Card>
			<div className='flex flex-col gap-y-4 text-white'>
				<span className='text-center'>
					{name} {surname}
				</span>

				<Button
					className='bg-gray-700'
					onPress={() => setVisible(true)}
				>
					Подаци
				</Button>
				<DataModal
					setVisible={setVisible}
					bindings={bindings}
					name={name}
					surname={surname}
					grade={grade}
					birthplace={birthplace}
				/>
			</div>
		</div>
	)
}
