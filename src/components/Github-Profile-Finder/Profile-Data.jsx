import React from 'react'
import { FaGithub } from "react-icons/fa";

const ProfileData = ({ data }) => {
    const { avatar_url, login, followers, following, public_repos, created_at } = data;
    return (
        <div className="card-details">
            <div className="avatar">
                <img className='w-full h-full object-cover ' src={avatar_url} alt="profile-picture" />
            </div>
            <div className="p-6 text-center">
                <h4 className="username">
                    {login}
                </h4>
                <p
                    className="followers ">
                    {`Created at: ${created_at ? JSON.stringify(created_at).slice(1,11) : ''}`}
                </p>
                <p
                    className="followers ">
                    {`Public reps: ${public_repos}`}
                </p>
                <p
                    className="followers ">
                    {`Followers: ${followers}`}
                </p>
                <p
                    className="following ">
                    {`Following: ${following}`}
                </p>
            </div>
            <div className="profile-link">

                <a href={`https://github.com/${login}`}
                    target='_blank'
                    className="link ">
                    <FaGithub fill='black' />
                </a>

            </div>
        </div>
    )
}

export default ProfileData