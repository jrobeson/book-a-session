import { ComponentPropsWithoutRef, type ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

type BaseProps = {
	textOnly?: boolean;
	children: ReactNode;
};

type ButtonProps = ComponentPropsWithoutRef<'button'> &
	BaseProps & {
		to?: never;
	};

type ButtonLinkProps = LinkProps & BaseProps & { to: string };

function isButtonLinkProps(props: ButtonProps | LinkProps): props is ButtonLinkProps {
	return 'to' in props;
}

export default function Button(props: ButtonProps | ButtonLinkProps) {
	const className = `button ${props.textOnly ? 'button--text-only' : ''}`;
	if (isButtonLinkProps(props)) {
		return (
			<Link {...props} className={className} to={props.to}>
				{props.children}
			</Link>
		);
	}
	return (
		<button className={className} {...props}>
			{props.children}
		</button>
	);
}
