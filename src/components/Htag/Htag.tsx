import React, { useMemo } from 'react';
import classnames from 'classnames';
import { HtagProps } from "@/components/Htag/Htag.props";
import cls from './Htag.module.css';

export const Htag = (props: HtagProps): React.JSX.Element => {
  const { children, className, tag, fontWeight = 500 } = props;

  const weightClass = useMemo(() => ({
    [cls.weight500]: fontWeight == 500,
    [cls.weight700]: fontWeight == 700,
  }), [fontWeight]);

  switch (tag) {
    case 'h1':
      return <h1 className={classnames(cls.h1, className, weightClass)}>{children}</h1>;
    case 'h2':
      return <h2 className={classnames(cls.h2, className, weightClass)}>{children}</h2>;
    case 'h3':
      return <h3 className={classnames(cls.h3, className, weightClass)}>{children}</h3>;
    default:
      return <></>;
  }
};
