import { StyledProps } from '@/@types/styledProps';
import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #EEEEEE;
    border-radius: 8px;
    width: 100%;
    padding: 8px;
    `;

export const StyledInput = styled.TextInput`
  color: black;
  font-size: ${(props: StyledProps) => props.theme.size.text.main}px;
`;