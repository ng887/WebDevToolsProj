/**
 * Created by neha on 4/9/2017.
 */

import React from 'react';

const Search = ({

                    onSubmit,
                    className,


                }) => {


    return (
        <form className={className}>
             <input id='autocomplete' placeholder="Enter your destination"></input>
             <button onClick={onSubmit}> Search </button>
        </form>
    )
}

    export default Search;