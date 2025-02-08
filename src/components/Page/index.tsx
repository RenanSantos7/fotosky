import { ReactNode, useLayoutEffect } from 'react';
import { ColorValue, StatusBar, Text, View } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';

import styled from 'styled-components/native';

interface PageProps {
	children: ReactNode;
	navBarColor?: ColorValue;
	navBarBtnStyle?: 'dark' | 'light';
	statusBarColor?: ColorValue;
	statusBarStyle?: 'default' | 'dark-content' | 'light-content';
}

const Container = styled.SafeAreaView`
	flex: 1;
`;

export default function Page({
	children,
	navBarColor = '#f0f4ff',
	navBarBtnStyle = 'dark',
	statusBarColor = '#F0F4FF',
	statusBarStyle = 'dark-content',
	...props
}: PageProps) {
    
	useLayoutEffect(() => {
		NavigationBar.setBackgroundColorAsync('white');
		NavigationBar.setButtonStyleAsync(navBarBtnStyle);
    }, []);
    
	return (
		<Container>
			<StatusBar
				backgroundColor={statusBarColor}
				barStyle={statusBarStyle}
			/>
			{children}
		</Container>
	);
}
