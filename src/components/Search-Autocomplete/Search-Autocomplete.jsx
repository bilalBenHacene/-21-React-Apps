import React, { useEffect, useState } from "react";
import "./Search-Autocomplete.css";
import SearchItem from "./Search-Item";
const SearchAutocomplete = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showDropdown, setShowDropDown] = useState(false);
  const handleFilterData = () => {
    // const inputText=e.target.value.toLowerCase();
    // setInput(inputText);
    // if (input && input.trim().length>0) {
    const filter = data.filter(user => user.firstName.toLowerCase().startsWith(input.toLowerCase()));
    console.log(filter);
    setFilterData(filter);
    // }


  }
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://dummyjson.com/users');
      const result = await response.json();
      if (result && result.users && result.users.length > 0) {
        setData(result.users.map(user => user));
      }
    } catch (e) {
      setError(e.message);
    } finally { setIsLoading(false); }
  };
  useEffect(() => {
    fetchData()
  }, []);
  useEffect(() => {
    if (input && input.trim().length > 0) {
      handleFilterData();
    }
    if (input && filterData.length > 0) setShowDropDown(true);
    else setShowDropDown(false)
  }, [input]);
  return (
    <div className="search-autocomplete">
      <h1 className="title">Search Autocomplete</h1>
      <div className="search-form">
        <input
          type="text"
          defaultValue={input ? input : ''}
          onChange={(e) => setInput(e.target.value)}
          name="floating_email"
          id="floating_email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        />
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Search user here ...
        </label>
      </div>
      <ul className="m-auto w-full md:w-1/2 divide-y divide-gray-200 dark:divide-gray-700">
        {
          (filterData && showDropdown) ?

            (filterData.map((user, index) => <SearchItem key={index} userData={user} />))
            : null



        }
      </ul>
    </div >
  );
};

export default SearchAutocomplete;
