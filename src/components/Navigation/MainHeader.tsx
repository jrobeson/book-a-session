import { useState } from 'react';
import UpcomingSessions from '../Sessions/UpcomingSessions';
import Button from '../UI/Button';

export default function MainHeader() {
	const [showUpcomingSessions, setShowUpcomingSessions] = useState<boolean>(false);

	function handleShowUpcomingSessions() {
		setShowUpcomingSessions(true);
	}
	function handleHideUpcomingSessions() {
		setShowUpcomingSessions(false);
		return;
	}

	return (
		<>
			{showUpcomingSessions && <UpcomingSessions onClose={handleHideUpcomingSessions} />}
			<header id='main-header'>
				<h1>ReactMentoring</h1>
				<nav>
					<ul>
						<li>
							<Button to='/' textOnly={true}>
								Our misson
							</Button>
						</li>
						<li>
							<Button to='/sessions' textOnly={true}>
								Browse Sessions
							</Button>
						</li>
						<li>
							<Button onClick={handleShowUpcomingSessions}>Upcoming sessions</Button>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
