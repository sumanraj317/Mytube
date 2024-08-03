
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import { BsMicFill } from "react-icons/bs";
import SearchList from './SearchList';
import { useState } from "react";

function SearchBar() {
  const [searchQuery, setSearchQuery] =useState("");
  const [SearchListA, setSearchList] =useState(false)
  const TitleArray=["video1","Video2","Animation video","Movies"].filter(q=>q.toUpperCase().includes(searchQuery.toUpperCase()));
  return (
    <>
    <div className='SearchBar_Container'>
        <div className="SearchBar_Container2">
            <div className="search_div">
        <input type="text" className='iBox_SearchBar' placeholder='search'
        onChange={e=>setSearchQuery(e.target.value)}
        value={searchQuery}
        onClick={e=>setSearchList(true)}/>
         
        <FaSearch className='searchIcon_SearchBar'
        onClick={e=>setSearchList(false)}
        />
        <BsMicFill className='Mic_SearchBar'/>
        {searchQuery&& SearchListA&&
          <SearchList
          setSearchQuery={setSearchQuery}
          TitleArray={TitleArray}
          />
        }
        
    </div>
    </div>
    </div>
    </>
  );
}

export default SearchBar;