import React from 'react';
import classnames from 'classnames';
import cls from './Button.module.css';
import { ButtonProps } from "./Button.props";

export const Button = (props: ButtonProps): React.JSX.Element => {
	const { children, className, variant = 'primary' } = props;

	return (
		<button className={classnames(cls.button, className, {
			[cls.primary]: variant === 'primary',
			[cls.ghost]: variant === 'ghost',
			[cls.tag]: variant === 'tag',
		})}>
			{children}
		</button>
	);
};
