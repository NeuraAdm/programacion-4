import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from './components/Header'
import { Search } from "./components/Search";

export const App = () => {
  const handleSearch = (searchTerm) => {
    console.log('Buscando:', searchTerm);
  };

  return (
    <>
      <Header title="CountriesApp" description="Buscador de
Países"/>
      <Search placeholder="Pais" onSearch={handleSearch} />
    </>
  )
};

