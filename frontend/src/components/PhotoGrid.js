
const cities = [

    {img: 'Bangkok.jpg', name: 'Bangkok', description: 'lalalalala'},
    {img: 'London.png', name: 'London', description: 'lalalalala'},
    {img: 'Paris.png', name: 'Paris', description: 'lalalalala'},
    {img: 'Bali.png', name: 'Bali', description: 'lalalalala'},
    {img: 'Iguazu.png', name: 'Puerto Iguazú', description: 'lalalalala'},
    {img: 'Cafayate.png', name: 'Cafayate', description: 'lalalalala'},
    {img: 'Calafate.png', name: 'Calafate', description: 'lalalalala'},
    {img: 'VillaLaAngostura.png', name: 'Villa la Angostura', description: 'lalalalala'},
    {img: 'RioDeJaneiro.png', name: 'Rio de Janeiro', description: 'lalalalala'},
    {img: 'Roma.png', name: 'Rome', description: 'lalalalala'},
    {img: 'NewYork.png', name: 'New York', description: 'lalalalala'},
    {img: 'Miami.png', name: 'Miami', description: 'lalalalala'}
];

const PhotoGrid = () => {

    return (
        <div className="citiesBox">
            {cities.map((city => 
                <div className="photoGrid" key={city.name} style={{backgroundImage: `url("/assets/fotos/${city.img}")`}}>
                    <h3>{city.name}</h3>
                    <h4>{city.description}</h4>
                </div>
                
                ))}
        </div>
    )        
}
export default PhotoGrid;


