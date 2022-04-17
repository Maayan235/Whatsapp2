import {useRef} from 'react';

function Search({doSearch}){

    const searchBox = useRef(null);

    const search = function(){
        doSearch(searchBox.current.value);
    }

    return(
        <div>
            <input ref={searchBox} onKeyUp={search} className="w-100" type="search" placeholder="Search Contact"></input>
        </div>
    );
}
export default Search