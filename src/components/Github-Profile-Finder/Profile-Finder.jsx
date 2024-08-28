import React, { useEffect, useState } from 'react'
import './Profile-Finder.css'
import ProfileData from './Profile-Data';

const ProfileFinder = () => {
    const [username,setUsername]=useState('bilalBenHacene');
    const [userData,setUserData]=useState([]);
    const [error,setError]=useState('');
    const [isLoading,setIsLoading]=useState(false);
    const handleSubmit=()=>{
        fetchUserProfileData()
    }
    const fetchUserProfileData=async ()=>{
        setIsLoading(true)
        try {
            const response=await fetch(`https://api.github.com/users/${username}`);
            const data=await response.json();
            // console.log(data);
            setUserData(data);
            setIsLoading(false);
            
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        }
    }
    useEffect(()=>{
        fetchUserProfileData()
    },[])

    return (
        <div className='profile-finder'>
            <h1 className='title'>Profile Finder</h1>
            <div className="mb-3 md:w-96">
                <div className="form-container">
                    <input
                        type="search"
                        defaultValue={username}
                        onChange={(e)=>setUsername(e.currentTarget.value)}
                        className="search-input"
                        placeholder="Search" />

                    {/* <!--Search button--> */}
                    <button
                        className="search-btn"
                        onClick={handleSubmit}
                        type="button"
                        id="button-addon1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                {
                    isLoading && <div className="profile-details">Loading Data ...</div>
                }
                {
                    !username &&  <div className="profile-details">No Data To Display</div>
                 }  
                 {
                    !isLoading && userData && <ProfileData data={userData} />
                 }
                
            </div>
        </div>
    )
}

export default ProfileFinder