import { motion } from 'framer-motion'
import Image from 'next/image'

import grbMod from '../../assets/grbMod.png'
import informatikaZnacka from '../../assets/informatickaSluzba.png'

type Props = {}

export default function LandingPage({}: Props) {
	return (
		<div className='flex flex-col gap-10 justify-center items-center h-screen snap-center snap-mandatory'>
			<div className='flex flex-row gap-2 text-3xl font-bold'>
				<motion.div
					className='sm:flex flex-col justify-center items-center '
					initial={{ opacity: 0, x: -200 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 2 }}
				>
					Информациони систем
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 200 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 2 }}
				>
					Web3 плате
				</motion.div>
			</div>

			<motion.div
				className='flex flex-col gap-3'
				initial={{ opacity: 0, y: 200 }}
				animate={{
					opacity: 0.75,
					y: 0,
				}}
				transition={{
					duration: 3,
				}}
			>
				<Image
					className='w-auto h-auto'
					priority={true}
					src={grbMod}
					alt='ministarstvoOdbrane'
					width={200}
					height={200}
				/>
			</motion.div>

			<motion.div
				className='flex flex-col gap-3'
				initial={{ opacity: 0, y: -200 }}
				animate={{
					opacity: 0.75,
					y: 0,
				}}
				transition={{
					duration: 3,
				}}
			>
				<Image
					className='w-auto h-auto'
					src={informatikaZnacka}
					alt='informatickaSluzba'
					width={200}
					height={200}
				/>
			</motion.div>
		</div>
	)
}
