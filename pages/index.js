import styles from '@/styles/Home.module.css';
import Header from '../components/Header';
import Contacts from '../components/Contacts';
import AuthContext from "../context/AuthContext";
import { useContext, useState } from 'react';


export default function Home(){
    const {user} = useContext(AuthContext)
    if(user==null) {
        return (
            <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
                <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>    
            </div>
    )}
    else return(
        <div className="bg-gray-800 h-screen" >
            <Header/>
            <Contacts/>
        </div>
    )
};