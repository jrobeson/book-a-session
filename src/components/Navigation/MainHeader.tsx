import { NavLink } from 'react-router-dom';
import Button from '../UI/Button';
import { useRef } from 'react';

export default function MainHeader() {

	return (
		<nav>
			<Button to='/' textOnly={true}>
				Our misson
			</Button>
			<Button to='/sessions' textOnly={true}>
				Browse Sessions
			</Button>
			<Button to='/' textOnly={false}>
				Upcoming sessions
			</Button>
		</nav>
	);
}
