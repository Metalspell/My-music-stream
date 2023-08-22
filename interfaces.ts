export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export interface HeaderProps {
  className?: string
  children: React.ReactNode;
}

export interface ListItemProps {
  image: string;
  name: string;
  href: string;
}