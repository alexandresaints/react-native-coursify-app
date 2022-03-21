import api from "../../Services/api";
import React, {useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import {FlatList, Text, ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import Posts from "../../Components/Posts";
import {CategoriesContainer, CategoriesText, Container} from './styles'
import Footer from "../../Components/Footer";

export default function Home(){

const [dataCategories, setDataCategories] = useState([])
const navigation = useNavigation(); 

    useEffect(() => {
        api.get(`categories/`)
                .then(response => {
                    setDataCategories(response.data)
                }).catch(error => {
                    console.log(error)
                })
    }, [])
    
    return(
    <SafeAreaView style={{backgroundColor: '#FFF'}}>
            {dataCategories.lenght < 1 ? null :
            <FlatList 
            data={dataCategories}
            keyExtractor={(item) => {return item.id}}
            renderItem={({item}) => (
            <Container>
                <CategoriesContainer>
                    <CategoriesText numberOfLines={1}>{item.name}</CategoriesText>
                    <TouchableOpacity
                    onPress={() => 
                    {navigation.push('CoursesFromCategory',
                    {category_id: item.id,
                    category_name: item.name
                    })}}
                    >
                        <Text>VER MAIS ➤</Text>
                    </TouchableOpacity>
                </CategoriesContainer>
            <ScrollView horizontal={true} pagingEnabled={false}>
                <Posts
                categoryId={item.id}
                />
                
            </ScrollView>
            
            </Container>
            )}
            ListFooterComponent={() => <Footer/>}
            />
            
        }
    </SafeAreaView>
    )
}