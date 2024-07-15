import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: 'primary' | 'ghost' | 'tag';
    children: ReactNode;
    arrow?: 'right' | 'down' | 'none';
}
