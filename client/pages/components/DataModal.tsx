import { Dispatch, SetStateAction } from 'react'
import { Modal, Button } from '@nextui-org/react'

type Props = {
	setVisible: Dispatch<SetStateAction<boolean>>
	bindings: {
		open: boolean
		onClose: () => void
	}
	name: string
	surname: string
	grade: string
	birthplace: string
}

export default function DataModal({
	setVisible,
	bindings,
	name,
	surname,
	grade,
	birthplace,
}: Props) {
	return (
		<div>
			<Modal width='600px' {...bindings}>
				<Modal.Header>
					<div className='text-xl'>Подаци о студенту</div>
				</Modal.Header>
				<Modal.Body>
					<div className='flex flex-col items-start'>
						<span>
							Име и презиме: {name} {surname}
						</span>
						<span>Место рођења: {birthplace}</span>
						<span>Просек: {grade}</span>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button
						auto
						flat
						color='success'
						onPress={() => setVisible(false)}
					>
						Плата
					</Button>
					<Button
						auto
						flat
						color='error'
						onPress={() => setVisible(false)}
					>
						Затвори
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	)
}
