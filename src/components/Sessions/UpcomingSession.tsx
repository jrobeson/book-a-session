import Button from '../UI/Button';

type UpcomingSessionProps = {
	id: string;
	title: string;
	summary: string;
	date: string;
};

export default function UpcomingSession({ title, summary, date }: UpcomingSessionProps) {
	return (
		<article className='upcoming-session'>
			<li>
				<h3>{title}</h3>
				<p>{summary}</p>
				<time dateTime={new Date(date).toISOString()}>
					{new Date(date).toLocaleDateString('en-US', {
						day: 'numeric',
						month: 'short',
						year: 'numeric',
					})}
				</time>
			</li>
			<p className='actions'>
				<Button textOnly={true}>Cancel</Button>
			</p>
		</article>
	);
}
