import api from "../../Services/api";
import React, {useState, useEffect } from "react";
import {StyleSheet, Text, ScrollView} from "react-native";
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { Container, CategoriesText } from "./style";


export default function Courses(props){

const id = props.route.params.id
const title = props.route.params.title
const content = props.route.params.content
const [dataCourse, setDataCourse] = useState([])
const { width } = useWindowDimensions();
const source = {
    html: `${content}`
  };

    useEffect(() => {
        api.get(`posts/${id}`)
                .then(response => {
                    setDataCourse(response.data)
                    console.log(id)
                }).catch(error => {
                    console.log(error)
                })
    }, [])
    
    return(
    <ScrollView key={id} style={{backgroundColor: '#FFF'}}>
        <Container>
               <CategoriesText>{title}</CategoriesText>
               <RenderHtml
                contentWidth={width}
                source={source}
               />
        </Container>
    </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        margin: 20,
        backgroundColor: '#FFF'
    },
    mainContainer: {
        flexDirection: 'row'
    },

    bookFont: {
        color: '#000',
        fontWeight: 'bold',
        maxWidth: 180,
        fontSize: 18
    },
    bookAuthorFont: {
        color: '#303030',
        fontSize: 14,
        maxWidth: 120,
    },
    aboutBook: {
        color: '#000',
        fontWeight: 'bold',
        maxWidth: 200,
        fontSize: 18,
        marginTop: 20
    },
    descriptionBook: {
        color: '#303030',
        fontSize: 14,
        maxWidth: 500,
        color: '#000',
        marginTop: 10
    },
    headerTopic: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20

    },

    bookImage: {
        width: 180,
        height: 270,
        marginRight: 10,
        borderRadius: 5
    },

    bookContainer: {
        flexDirection: 'row',
    },

    readNowContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 220
    },
    readNowText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 13
    },

    readNow: {
        width: '100%',
        padding: 10,
        backgroundColor: '#FFA500',
        justifyContent: 'center',
        alignItems: 'center'
    }

})