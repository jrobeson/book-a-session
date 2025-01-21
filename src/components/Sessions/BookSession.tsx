import { useRef, useEffect } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import Modal, { type ModalHandle } from '../UI/Modal';

type BookingSessionProps = {
	onClose: () => void;
};

export default function BookSession({ onClose }: BookingSessionProps) {
	const modalRef = useRef<ModalHandle>(null);

	useEffect(() => {
		if (modalRef.current) {
			modalRef.current.open();
		}
	}, []);

	return (
		<Modal ref={modalRef} onClose={onClose}>
			<h2>Book Session</h2>
			<Input id='name' label='Your Name' />
			<Input id='email' label='Your Email' />
			<p className='actions'>
				<Button textOnly={true} onClick={onClose}>
					Cancel
				</Button>
				<Button>Book Session</Button>
			</p>
		</Modal>
	);
}
