import SessionItem from './SessionItem';

export interface Session {
	id: string;
	title: string;
	summary: string;
	image: string;
}

type SessionProps = {
	sessions: Session[];
};

export default function SessionList({ sessions }: SessionProps) {
	const sessionElements = sessions.map((session) => (
		<li key={session.id}>
			<SessionItem {...session} />
		</li>
	));
	return <ul id='sessions-list'>{sessionElements}</ul>;
}
