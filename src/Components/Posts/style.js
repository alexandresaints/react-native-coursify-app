import styled from "styled-components/native";
import { theme } from "../Utils/theme";

export const PostContainer = styled.View`
    margin: 20px;
    right: 20px;
    max-width: 200px;
    min-width: 200px;
    border-radius: 20px;
`
export const PostTitle = styled.Text`
    color: ${theme.colors.green80};
    font-weight: bold;
    max-width: 80%;
`
export const HTMLContent = styled.View`
    max-height: 100px;
`
export const ReadMoreText = styled.Text`
    color: ${theme.colors.orange80};
`