import React from 'react'


function Search(props){

    const handleInput = (evt) => {
        props.changeSearchTerm(evt.target.value)
    }

    return(
        <div className= "searchfunction" align="center">
            <input type="text" 
                name="search" 
                className="search"
                value={props.searchTerm}
                onChange={handleInput}
                placeholder="Search through entries"
            />
            <br></br>
            <br></br>
            
            </div>
    )

}

export default Search