import React from 'react';
import classnames from 'classnames';
import cls from './Button.module.css';
import { ButtonProps } from "./Button.props";
import ArrowIcon from '@public/arrow.svg';

export const Button = (props: ButtonProps): React.JSX.Element => {
	const {
		children,
		className,
		variant = 'primary',
		arrow = 'none',
		...spreadProps
	} = props;

	return (
		<button className={classnames(cls.button, className, {
			[cls.primary]: variant === 'primary',
			[cls.ghost]: variant === 'ghost',
			[cls.tag]: variant === 'tag',
		})}
		{...spreadProps}
		>
			{children}
			{arrow !== 'none' && <span className={classnames(cls.arrow, {
				[cls.down]: arrow === 'down',
			})}>
				<ArrowIcon className={cls.icon} />
			</span>
			}
		</button>
	);
};
