import { type ComponentPropsWithoutRef } from 'react';

type InputProps = {
	label: string;
	id: string;
} & ComponentPropsWithoutRef<'input'>;

export default function Input({ id, label, ...props }: InputProps) {
	return (
		<div className='control'>
			<label id={id} htmlFor=''>
				{label}
			</label>
			<input type='text' {...props} />
		</div>
	);
}
