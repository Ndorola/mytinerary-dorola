import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default class Home extends React.Component {
    render() {
        return (
            <div className = "caja" >
                <Header/>
                <div className = "texto">
                    <h2>Hola, soy Niqui!</h2>
                </div>
                <Footer/>
        </div>
        ) 
    }
}

// const Home = () => {
//   return (
//     <div className = "caja" >
//         <Header/>
//         <div className = "texto">
//             <h2>Hola, soy Niqui!</h2>
//         </div>
//         <Footer/>
//   </div>
//   ) 
// }

// export default Home