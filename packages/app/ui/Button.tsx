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
          'bg-teal-4 border-transparent hover:bg-teal-5 active:bg-teal-6',
        secondary:
          'bg-gray-3 border-gray-7 hover:bg-gray-4 hover:border-gray-8 active:bg-gray-5',
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
      primary: 'text-teal-11',
      secondary: 'text-gray-11',
      icon: 'text-gray-11',
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
