import { Button as ButtonNativeBase, Text, IButtonProps } from 'native-base';

interface Props extends IButtonProps {
  title: string;
  type?: 'PRIMARY' | 'SECONDARY';
}

export function Button({ title, type = 'PRIMARY', ...rest }: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h="14"
      rounded="sm"
      textTransform="uppercase"
      bg={type === 'SECONDARY' ? 'red.500' : 'yellow.500'}
      _pressed={{
        bg: type === 'SECONDARY' ? 'red.700' : 'yellow.700',
      }}
      _loading={{
        _spinner: {color: 'black'}
      }}
      {...rest}
    >
      <Text
        fontSize='sm'
        fontFamily='heading'
        color={type === 'SECONDARY' ? 'white' : 'black'}
      >{title}</Text>
    </ButtonNativeBase>
  );
}
