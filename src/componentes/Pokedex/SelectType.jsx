import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectType = ({setURLtype, setPage}) => {

    const [typesPoke, settypesPoke]= useState()
    const [list, setList] = useState('offList')
    const [selectedType,setSelectedType] = useState('ALL')
    useEffect(() => {
      const URL = 'https://pokeapi.co/api/v2/type'
      axios.get(URL)
      .then( res => settypesPoke(res.data.results))
      .catch(err => console.log(err))
    }, [])
    

// const change = e =>{
//     setURLtype(e.target.value);
//     console.log(e.target.name);

// }
const handleClick = es =>{
  //setURLtype(e.target.value)
  setURLtype(es.target.value);
  setSelectedType(es.target.id);
  setList('offList');
  setPage(1);
  //console.log(list);
}
const showList = lis =>{
  setList('onList')
//console.log(list);
} 
//console.log(list)
//console.log(selectedType); 
  return (
    <div className='selectType' >
      <option onClick={handleClick} value="All">ALL</option> <span onClick={showList} className='btnlist'> <i className='bx bx-menu' ></i></span>
      <p>{selectedType}</p>
      <div className={`selectdiv ${list}`}>
      {/* <option value="All">All</option> <span className='btnlist'> CLick</span> */}
      {
                typesPoke?.map(type => (
                  
                    <option className='Optionbox' onClick={handleClick} key={type.url} value={type.url} id={type.name} >{type.name}  </option>
                      ))
            }
      
      </div>


        {/* <select className='selection' onChange={change}>
         
            <option value="All">All</option>
          
            {
                typesPoke?.map(type => (
                  
                    <option key={type.url} value={type.url}>{type.name}</option>
                      ))
            }
            
        </select> */}
    </div>
  )
}


export default SelectType