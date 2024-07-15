import React from 'react';
import classnames from 'classnames';
import cls from './P.module.css';
import { PProps } from "@/components/P/P.props";

export const P = (props: PProps): React.JSX.Element => {
  const { children, className, size = "m", ...spread } = props;

  return (
    <p className={classnames(cls.p, className, {
        [cls.s]: size === 's',
        [cls.m]: size === 'm',
        [cls.l]: size === 'l',
    })} {...spread}>
      {children}
    </p>
  );
};
