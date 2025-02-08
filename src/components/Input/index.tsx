import { TextInputProps } from 'react-native';
// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome6';

import { Container, StyledInput } from './styles';
import { useThemeContext } from '../../contexts/themeContext.tsx';

interface InputProps extends TextInputProps {
	icon?: string;
	secret?: boolean;
}

export default function Input({ secret = false, ...props }: InputProps) {
	const { theme } = useThemeContext();

	return (
		<Container>
			<StyledInput
				placeholder={props.placeholder}
				placeholderTextColor='#A09D9D'
				underlineColorAndroid='transparent'
				cursorColor={theme.colors.primary.main}
				secureTextEntry={secret}
				autoCapitalize={props.autoCapitalize || 'none'}
				{...props}
			/>
		</Container>
	);
}
