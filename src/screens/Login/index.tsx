import { useState } from 'react';

import { Container, Input, Title } from './styles';
import Page from '../../components/Page';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<Page>
			<Container>
				<Title>Faça Login no FotoSky!</Title>
				<Input
					value={email}
					onChangeText={(text: string) => setEmail(text)}
                    placeholder='Seu e-mail'
                    keyboardType='email-address'
				/>
				<Input
					value={password}
					onChangeText={(text: string) => setPassword(text)}
					placeholder='Sua senha'
					secureTextEntry
				/>
			</Container>
		</Page>
	);
}
