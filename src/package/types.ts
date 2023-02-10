export interface Theme {
  paper: string;
  text: string;
  textBold: string;
  textLight: string;
}

export interface IconProps {
  width?: number;
  height?: number;
  children: string;
  color?: string;
  animate?: React.ReactNode;
}
