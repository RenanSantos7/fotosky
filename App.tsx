import { NavigationContainer } from '@react-navigation/native';

import AppThemeProvider from './src/contexts/themeContext';
import Routes from './src/routes';

export default function App() {
	return (
		<NavigationContainer>
			<AppThemeProvider>
				<Routes />
			</AppThemeProvider>
		</NavigationContainer>
	);
}
