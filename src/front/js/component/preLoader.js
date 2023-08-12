import React, { useEffect } from 'react'
import '../../styles/preloader.css';
import { preLoaderAnim } from '../../../animations';

 const PreLoader = () => {

    useEffect  (() => {
        preLoaderAnim()
    }, [])  

  return (
    <div className='preloader'>
        <div className='texts-container'>
            <span>Vizuals </span>
            <span>Vizuals </span>
            <span>Vizuals</span>
        </div>
    </div>
  )
}

export default PreLoader;
