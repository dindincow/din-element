// import type { PropType } from 'vue'
export type ButtonType = 'primary'| 'success'| 'warning'| 'danger'| 'info'
export type ButtonSize = 'large' | 'small'
export type NativeType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  disabled?: boolean;
  nativeType?: NativeType; /* 按鈕原生功能 */ 
  autofocus?: boolean;
  icon?: string;
  loading?: boolean;
}
export interface ButtonInstance {
  ref: HTMLButtonElement
}
