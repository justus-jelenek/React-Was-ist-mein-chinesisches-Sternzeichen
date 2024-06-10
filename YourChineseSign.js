import React, { useEffect, useState } from 'react';
//import background from "./tierZeichen.png";
import backgroundYourChineseSign from "./background_your_chinese_sign.png";
import { pageBackgrounds } from './App.js';


function AnimalCategory(props) {
  //console.log(props);
  
  return (
    <div>
       {props.items.filter((elem) =>  props.context === elem.years ).map((item, index) => (
        
        <li key={index}>
          
          <p className='emoji'> {item.picture}</p>
          <p className='emoji'>{props.context}</p>
          <p className='text'>Element: {item.element}</p>
          <p className='text'>Choroskop: {item.choroskop}</p>
        </li>
      ))} 
    </div>
  )
}

export default function YourSign() {

  const [data, setData] = useState({});
  const [context, setContext] = useState('');

 

  useEffect(() => {
    
    fetch('https://raphael-gessler.info/blindindex.php')
    .then(response => response.json())
    .then(jsonData => setData(jsonData.Animal))
    .catch(error => {
    
    })
  }, []);

const yearInput = (e) => {
  setContext(e.target.value);
 
};

console.log('context',{context});

return (
  
<div className='container' style={{ backgroundImage: `url(${pageBackgrounds['/yourchinesesign']})`, minHeight: '510px', backgroundRepeat: 'no-repeat'}}>

      <label>Your birth year </label><br/>
      <input 
        id="birthyear"
        placeholder='Enter your birth year....'
        onChange={yearInput}
      />
    <ul>
      {Object.keys(data).map(animalkey => <AnimalCategory 
        key={animalkey}
        title={animalkey}
        items={data[animalkey]}
        context={context}
      />)}
   
    </ul>
    </div>
  
);
}


