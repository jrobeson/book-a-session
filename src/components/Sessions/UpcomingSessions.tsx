import Modal, { type ModalHandle } from '../UI/Modal';
import { SESSIONS } from '../../dummy-sessions';
import Button from '../UI/Button';
import UpcomingSession from './UpcomingSession';
import { useEffect, useRef } from 'react';
let sessions = SESSIONS.splice(0, 3);

export default function UpcomingSessions({ onClose }: { onClose: () => void }) {
	const modalRef = useRef<ModalHandle>(null);
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
