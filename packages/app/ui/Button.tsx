import { Pressable, Text } from 'react-native';
import { styled } from 'nativewind';

// Add variant to styled() components
const ButtonContainer = styled(
  Pressable,
  'border rounded items-center self-auto transition duration-100',
  {
    variants: {
      intent: {
        icon: 'bg-transparent rounded-sm border-transparent text-grayA-12 active:text-grayA-11',
        primary:
          'bg-brandBg border-transparent hover:bg-brandBgHover active:bg-brandBgActive',
        secondary:
          'bg-grayBg border-grayBorder hover:bg-grayBgHover hover:border-grayBorderHover active:bg-grayBgActive',
      },
      size: {
        small: 'py-1 px-2',
        medium: 'py-2 px-4',
        icon: 'p-2',
      },
    },
    defaultProps: {
      intent: 'primary',
      size: 'medium',
    },
  }
);

const ButtonText = styled(Text, 'font-semibold', {
  variants: {
    intent: {
      primary: 'text-brandText',
      secondary: 'text-grayText',
      icon: 'text-grayText',
    },
    size: {
      small: 'text-sm',
      icon: 'text-sm',
      medium: 'text-base',
    },
  },
  defaultProps: {
    intent: 'primary',
    size: 'medium',
  },
});

type ButtonProps = React.ComponentProps<typeof ButtonContainer> & {
  label?: string;
};
export const Button: React.FC<ButtonProps> = ({
  intent,
  size,
  label,
  children,
  ...props
}) => (
  <ButtonContainer intent={intent} size={size} {...props}>
    <>
      {children}
      {label ? (
        <ButtonText intent={intent} size={size}>
          {label}
        </ButtonText>
      ) : null}
    </>
  </ButtonContainer>
);
