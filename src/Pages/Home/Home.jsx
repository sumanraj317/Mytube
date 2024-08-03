import React from 'react'
import './Home.css'
import LeftSideBar from '../../Components/LeftSidebar/LeftSideBar'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'

import vid from '../../Components/Video/vid.mp4.MOV'

function Home() {
  const vids  = [

    {
      _id: 1,
      video_src: vid,
      chanel:"62bafe6752cea35a6c30685f",
      title:"video 1",
      Uploder:"abc", 
      description:"description of video 1"
    },
    {
      _id: 2,
      video_src: vid,
      chanel:"cdd",
      title:"video 2",
      Uploder:"abc",
      description:"description of video 2"
    },
    {
      _id: 3,
      video_src: vid,
      chanel:"add",
      title:"video 3",
      Uploder:"abc",
      description:"description of video 3"
    },
    {
      _id: 4,
      video_src: vid,
      chanel:"add",
      title:"video 4",
      Uploder:"abc",
      description:"description of video 4"
    },

  ];
  const NavList=[
    "All",
    "JavaScript",
    "React js",
    "C++",
    "Movies",
    "Science",
    "Fitness",
    "Gaming",
    "Comedy",
    "Nutrition",
    "Motivation",
    "Messi",
    "Fifa",
    "Mr Bean",
    "Cristiano",
    "ElonMusk",
    "Protien"
  ]
  return (
    <div className='container_Pages_App'>
        <LeftSideBar/>
        <div className="container2_Pages_App">
          <div className="navigation_Home">
            {
              NavList.map(m=>{
                return(
                  <p key={m} className='btn_nav_home'>
                    {m}
                  </p>
                )

              })
            }
          </div>
        <ShowVideoGrid vids={vids}/>
        </div>
        </div>
  )
}

export default Home