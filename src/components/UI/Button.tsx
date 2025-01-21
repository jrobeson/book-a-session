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
	if (isButtonLinkProps(props)) {
		const { to, children, textOnly, ...otherProps } = props;
		return (
			<Link className={`button ${textOnly ? 'button--text-only' : ''}`} to={to} {...otherProps}>
				{children}
			</Link>
		);
	}
	const { children, textOnly, ...otherProps } = props;
	return (
		<button className={`button ${textOnly ? 'button--text-only' : ''}`} {...otherProps}>
			{children}
		</button>
	);
}
