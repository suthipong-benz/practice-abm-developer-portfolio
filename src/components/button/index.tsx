import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
  children?: ReactNode;
  variants?: 'solid' | 'outline'
}

export default function Button ({ children, variants }: ButtonProps) {
  return (
    <button className={`${styles.buttonWrapper} ${variants === 'outline' && styles.outline}`}>{children}</button>
  )
}