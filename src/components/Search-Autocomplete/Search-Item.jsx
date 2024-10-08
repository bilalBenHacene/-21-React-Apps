import React from 'react'

const SearchItem = ({userData}) => {
  return (
    
    <li className="pb-3 sm:pb-4">
       <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className="flex-shrink-0">
             <img className="w-8 h-8 rounded-full" src={userData.image} alt="Neil image"/>
          </div>
          <div className="flex-1 min-w-0">
             <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                {`${userData.firstName} ${userData.lastName}`}
             </p>
             <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                {userData.email}
             </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
             {userData.age}
          </div>
       </div>
    </li>           

  )
}

export default SearchItem