import React, { useState } from 'react';
import NavBar from './Components/Navbar'
import Header from './Components/Header';
import { Container } from 'react-bootstrap';
import Catogery from './Components/catogery'
import Listitem from './Components/Listitem'
import data from './Components/dataApi'

const App = () => {
    const [Data, setData] = useState(data)
    const allcategores = ["الكل", ...new Set(data.map((cat) => cat.catogery))]

    const filtercatogery = (selectedCat) => {
        if (selectedCat === 'الكل') {
            setData(data);
        } else {
            const filterfood = data.filter((item) => item.catogery === selectedCat);
            setData(filterfood);
        }
    }

    const filterBySearch = (word) => {
        if (word !== '') {
            const filtersearchfood = data.filter((item) => item.title === word);
            setData(filtersearchfood);
        }
    }



    return (
        <>
            <NavBar filterBySearch={filterBySearch} />
            <Container>
                <Header />
                <Catogery filtercatogery={filtercatogery} allcategores={allcategores} />
                <Listitem Data={Data} />
            </Container>
        </>

    )

}

export default App;
