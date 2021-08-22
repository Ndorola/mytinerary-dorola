// import {useState, useEffect} from "react";
// import { connect } from "react-redux";

// const filterCities = () => {

//     const [cities, setCities] = useState([])
//     const [search, setSearch] = useState("")

//     const captionCity = (e) => {
//         setSearch(e.target.value);
//         console.log("Search "+ e.target.value);
//     }

//     useEffect(() => {
//         var searchResult = props.allCities.filter((city) => city.name.toLowerCase().startsWith(search.trim().toLowerCase()))
//                 setCities(searchResult)
//                 console.log(cities)                  
//             }, [search])

//     return (
//             <div className="boxSearch">
//                 <img src={"/assets/barSearch.png"}/>
//                 <input type="text" placeholder="Where would you like to go?" onChange = {captionCity}/>
//             </div>
//     )
// }

// export default connect(mapStateToProps)(filterCities)