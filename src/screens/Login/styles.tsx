import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-inline: 20px;
  gap: 16px;
`;

export const Title = styled.Text`
	font-size: 20px;
	font-weight: 600;
`;

export const Input = styled.TextInput`
	border: 1px solid #ccc;
	width: 100%;
	font-size: 16px;
    border-radius: 8px;
`;
