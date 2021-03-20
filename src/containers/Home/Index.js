import React from "react";
import ImageCard from '../../components/UI/Cards/ImageCard'
import Footer from "../../components/UI/Footer/Footer";
import AddButton from '../../components/AddButton/AddButton';
import Header from '../../components/UI/Header/Header';

export default function Index() {
   return (
      <div>
         <Header />
         <ImageCard />
         <ImageCard />
         <ImageCard />
         <ImageCard />
         <ImageCard />
         <AddButton />
         <Footer/>
      </div>
   );
}