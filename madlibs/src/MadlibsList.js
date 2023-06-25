import React, {useState} from 'react';
import NewMadLibsForm from './NewMadlibsForm';
import Madlib from './Madlib'



const MadlibsList = () => {
    const [madlibs, setMadlib] = useState([]);

   const createMadlib = newMadlib => {
    setMadlib(madlibs => [...madlibs, newMadlib]);
   };

   const remove = id => {
    setMadlib(madlibs => madlibs.filter(madlib => madlib.id !==id));
   }

   const madlibComponents = madlibs.map(madlib => (
    <Madlib 
        key = {madlib.id}
        id = {madlib.id}
        noun = {madlib.noun}
        noun2= {madlib.noun2}
        adjective={madlib.adjective}
        color = {madlib.color}
        handleRemove = {remove}
        />
   ));
    return (
        <div>
         <h2>Madlibs!</h2>
         <NewMadLibsForm createMadlib={createMadlib}/>
         {madlibComponents}
        </div>
    );
}


export default MadlibsList;
