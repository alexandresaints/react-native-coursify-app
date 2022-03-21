import styled from "styled-components/native";
import { theme } from "../Utils/theme";

export const NavTab = styled.Image`
    width: 25px;
    height: 20px;
`
export const NavTabContainer = styled.TouchableOpacity`
    background-color: ${theme.colors.green80};
    padding: 10px;
    border-radius: 500px;
`