import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import { useModal, Button } from '@nextui-org/react'

import MailModal from './MailModal'

type Props = {}

export default function Menu({}: Props) {
	const { setVisible, bindings } = useModal()

	return (
		<header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20'>
			<motion.div
				className='flex flex-row items-center'
				initial={{
					opacity: 0,
					x: -100,
				}}
				animate={{
					opacity: 1,
					x: 0,
				}}
				transition={{
					duration: 1,
				}}
			>
				<SocialIcon
					url='https://www.mod.gov.rs/'
					fgColor='gray'
					bgColor='transparent'
				/>
				<SocialIcon
					url='https://www.facebook.com/people/%D0%9C%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%BE-%D0%BE%D0%B4%D0%B1%D1%80%D0%B0%D0%BD%D0%B5-%D0%B8-%D0%92%D0%BE%D1%98%D1%81%D0%BA%D0%B0-%D0%A1%D1%80%D0%B1%D0%B8%D1%98%D0%B5/100064645005796/'
					fgColor='gray'
					bgColor='transparent'
				/>
				<SocialIcon
					url='https://www.youtube.com/channel/UCbB6xQdubQyHyDK8WGGm22A'
					fgColor='gray'
					bgColor='transparent'
				/>
			</motion.div>

			<motion.div
				className='flex flex-row items-center text-gray-500 cursor-pointer'
				initial={{
					opacity: 0,
					x: 100,
				}}
				animate={{
					opacity: 1,
					x: 0,
				}}
				transition={{
					duration: 1,
				}}
			>
				<Button
					className='uppercase text-gray-500'
					size='lg'
					icon={
						<SocialIcon
							className='cursor-pointer'
							network='email'
							fgColor='gray'
							bgColor='transparent'
						/>
					}
					onPress={() => setVisible(true)}
				>
					Контакт
				</Button>
				<MailModal setVisible={setVisible} bindings={bindings} />
			</motion.div>
		</header>
	)
}
