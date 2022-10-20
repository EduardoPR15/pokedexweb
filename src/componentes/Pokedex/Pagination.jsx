import React from 'react'

const Pagination = ({page,setPage, pokemonLength}) => {

    const pagesBLock = 8
    const currentBlock = Math.ceil(page / pagesBLock)
    const blockLength = Math.ceil(pokemonLength / pagesBLock) 
    
    const arrPages = []
const initialPage = (currentBlock - 1) * pagesBLock + 1

const limitPage = blockLength === currentBlock ? pokemonLength : currentBlock * pagesBLock
    for (let i = initialPage; i <= limitPage; i++) {
        arrPages.push(i)
    }

    const handlePrev= () =>{
        setPage(page -1)
    }
    const handleNext = () =>{
        setPage(page + 1)
    }
    const handleFocus = currentPage =>{
       setPage(currentPage)
    }
//console.log(pokemonLength);
    function arrowBtn(numberp, pokemonLength) {
        if (numberp === 1 ) {
            let ArrowBtn = 'ArrowNone'
            return ArrowBtn
            
        }
    }
    function arrowBtn1(numberp, pokemonLength) {
        if (numberp === pokemonLength) {
            let ArrowBtn1 = 'ArrowNone'
            return ArrowBtn1
            
        }
    }
const btnArrow = arrowBtn(page, pokemonLength)
const btnArrow1 = arrowBtn1(page, pokemonLength)
//console.log(btnArrow);
//console.log(btnArrow1)

    return (
    <div className='Pagination'>
        
            
             <div onClick={handlePrev} className={`backPage paginationActivebtn ${btnArrow} `}><i className='bx bxs-chevrons-left'></i></div>
        
       
        
        <ul className='pageContainer'>
            {
                arrPages.map(e => (
                    <li onClick={()=>handleFocus(e)} className={`paginationPage ${page === e && 'paginationActive'}`} key={e}>{e}</li>
                ))
            }
        </ul>
        <div onClick={handleNext} className={`nextPage paginationActivebtn ${btnArrow1}`}><i className='bx bxs-chevrons-right'></i></div>
    </div>
  )
}

export default Pagination