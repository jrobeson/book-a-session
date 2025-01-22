import Modal, { type ModalHandle } from '../UI/Modal';
import Button from '../UI/Button';
import UpcomingSession from './UpcomingSession';
import { useEffect, useRef } from 'react';
import { useSessionsContext } from '../../store/sessions-context';

export default function UpcomingSessions({ onClose }: { onClose: () => void }) {
	const modalRef = useRef<ModalHandle>(null);
	const { sessions } = useSessionsContext();
	const sessionItems = sessions.map((session) => <UpcomingSession key={session.id} {...session} />);
	useEffect(() => {
		if (modalRef.current) {
			modalRef.current.open();
		}
	}, []);

	return (
		<Modal ref={modalRef} onClose={onClose}>
			<h2>Upcoming Sessions</h2>
			<ul>{sessionItems}</ul>
			<p className='actions'>
				<Button onClick={onClose}>Close</Button>
			</p>
		</Modal>
	);
}
