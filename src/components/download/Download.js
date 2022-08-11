import React from 'react'
import DownloadSectionStyled from './download.styled';
import appStore from '../../assets/appleStore.png';
import googlePlay from '../../assets/googlePlay.png';
import screens from '../../assets/screens.png';

const Download = () => {
  return (
    <DownloadSectionStyled>
      <div className="download-infos">
        <h1>Download Now Travel Community Apps</h1>
        <div className="download-infos-app">
          <img src={googlePlay} alt="google play" />
          <img src={appStore} alt="apple store" />
        </div>
      </div>
      <img src={screens} alt="screen" className="screen" />
    </DownloadSectionStyled>
  )
}

export default Download