import { createContext, ReactNode, useContext } from 'react';
import { ThemeProvider } from 'styled-components/native';

import { ITheme } from '../@types';
import theme from '../theme';

interface IThemeContext {
	theme: ITheme;
}

const ThemeContext = createContext<IThemeContext>({ theme });

export default function AppThemeProvider({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<ThemeContext.Provider value={{ theme }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	);
}

export function useThemeContext() {
	const context = useContext(ThemeContext);
	if (!context)
		throw new Error('ThemeContext não está sendo provido neste componente');
	return context;
}
