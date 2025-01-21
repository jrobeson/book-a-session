import { type ReactNode } from 'react';
import { useRef, useImperativeHandle, forwardRef } from 'react';
import { createPortal } from 'react-dom';

interface ModalHandle {
	open: () => void;
}

type ModalProps = {
	children: ReactNode;
	onClose: () => void;
};

const Modal = forwardRef<ModalHandle, ModalProps>(function Modal({ children, onClose, ...props }, ref) {
	const dialog = useRef<HTMLDialogElement>(null);

	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current?.showModal();
			},
		};
	});

	return createPortal(
		<dialog ref={dialog} className='modal' onClose={onClose} {...props}>
			{children}
		</dialog>,
		document.getElementById('modal-root')!
	);
});

export default Modal;
