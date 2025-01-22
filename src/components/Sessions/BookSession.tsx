import { useRef, useEffect } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import Modal, { type ModalHandle } from '../UI/Modal';
import { useSessionsContext } from '../../store/sessions-context';
import { type Session } from '../../store/sessions-context';

type BookingSessionProps = {
	onClose: () => void;
	session: Session;
};

export default function BookSession({ session, onClose }: BookingSessionProps) {
	const modalRef = useRef<ModalHandle>(null);
	const { bookSession } = useSessionsContext();

	useEffect(() => {
		if (modalRef.current) {
			modalRef.current.open();
		}
	}, []);

	function handleBookSession() {
		bookSession(session);
		onClose();
	}

	return (
		<Modal ref={modalRef} onClose={onClose}>
			<h2>Book Session</h2>
			<Input id='name' label='Your Name' />
			<Input id='email' label='Your Email' />
			<p className='actions'>
				<Button textOnly={true} onClick={onClose}>
					Cancel
				</Button>
				<Button onClick={handleBookSession}>Book Session</Button>
			</p>
		</Modal>
	);
}
