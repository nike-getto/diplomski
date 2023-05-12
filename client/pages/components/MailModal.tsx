import { Modal, Button, Input } from '@nextui-org/react'
import { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'

import password from '../../assets/password.svg'
import mail from '../../assets/mail.svg'

type Props = {
	setVisible: Dispatch<SetStateAction<boolean>>
	bindings: {
		open: boolean
		onClose: () => void
	}
}

export default function MailModal({ setVisible, bindings }: Props) {
	return (
		<div>
			<Modal width='600px' {...bindings}>
				<Modal.Header>
					<div className='text-xl'>Форма за слање поруке</div>
				</Modal.Header>
				<Modal.Body>
					<Input
						clearable
						bordered
						fullWidth
						color='primary'
						size='lg'
						placeholder='e-mail'
						contentLeft={
							<Image
								src={mail}
								width={24}
								height={24}
								alt='mailIcon'
							/>
						}
					/>
					<Input
						clearable
						bordered
						fullWidth
						color='primary'
						size='lg'
						placeholder='password'
						contentLeft={
							<Image
								src={password}
								width={24}
								height={24}
								alt='passwordIcon'
							/>
						}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button
						auto
						flat
						color='success'
						onPress={() => setVisible(false)}
					>
						Пошаљи поруку
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	)
}
