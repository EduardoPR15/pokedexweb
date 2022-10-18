import React from 'react'

const Pagination = ({page, pokemonLength}) => {

    const pagesBLock = 8
    const currentBlock = Math.ceil(page / pagesBLock)
    const blockLength = Math.ceil(pokemonLength / pagesBLock) 
    
    const arrPages = []
const initialPage = (currentBlock - 1) * pagesBLock + 1

const limitPage = blockLength === currentBlock ? pokemonLength : currentBlock * pagesBLock
    for (let i = initialPage; i <= limitPage; i++) {
        arrPages.push(i)
    }

    return (
    <div className='Pagination'>
        <div className="backPage">atras<i class='bx bxs-chevrons-left'></i></div>
        <ul className='pageContainer'>
            {
                arrPages.map(e => (
                    <li className='paginationPage' key={e}>{e}</li>
                ))
            }
        </ul>
        <div className="nextPage">adelante<i class='bx bxs-chevrons-right'></i></div>
    </div>
  )
}

export default Pagination