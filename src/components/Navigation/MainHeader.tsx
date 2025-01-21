import Button from '../UI/Button'

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
