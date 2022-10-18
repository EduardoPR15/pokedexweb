import React from 'react'

const Pagination = ({page, pokemonLength}) => {

    const pagesBLock = 8
    const currentBlock = Math.ceil(page / pagesBLock)
    const blockLength = Math.ceil(pokemonLength / pagesBLock) 
const initialPage = (currentBlock -1) * pagesBLock + 1

const limitPage = blockLength === currentBlock ? pokemonLength : currentBlock * pagesBLock
    const arrPages = []
    for (let i = initialPage; i < limitPage; i++) {
        arrPages.push(i)
        
    }
    return (
    <div className='PagesContainer'>
        <div className="backtPage">atras<i class='bx bxs-chevrons-left'></i></div>
        <ul>
            {
                arrPages.map(e => (
                    <li key={e}>{e}</li>
                ))
            }
        </ul>
        <div className="nestPage">adelante<i class='bx bxs-chevrons-right'></i></div>
    </div>
  )
}

export default Pagination