import React, { useReducer, useRef } from 'react';
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import pageReducer from '../reducers/pageReducer';
import imgReducer from '../reducers/imgReducer';
import useFetch from '../Hooks/useFetch';
import useInfiniteScroll from '../Hooks/useInfiniteScroll';
// React Hooks,child components and Reducers are Imported

export default function Mainpage() {

//Constanta Declaration for Reducers    
    const [pager, pagerDispatch] = useReducer(pageReducer, { page: 0 })
    const [imgData, imgDispatch] = useReducer(imgReducer, { images: [], fetching: true, })

    let bottomBoundaryRef = useRef(null);
    useFetch(pager, imgDispatch);
    useInfiniteScroll(bottomBoundaryRef, pagerDispatch);


    return (
        
        
        <div>
   <Header/>
          
             <Navbar/>
             <div id='images' style={{marginTop: 143}}>
             <div className="row">
             {imgData.images.length ? imgData.images.map((data, key) => {
              return (
               <>
                 {data.data.map((img,index)=>{
                     //Map function for calling all cards
                  return(
                          <div key={`${key}_${index}`} className="column ">
                           <div className="card">
                           <div  className="card-image">
                           <img className="img-css"
                           //Image used from API
                            alt={img.title}
                            src={img.feature_img}
                           />
                                                        
                          </div>
                                                
                          <div className="card-content">
                          <div className="card-title">{img.category[0]}</div>
                          <a href={`https://www.scoopwhoop.com/${img.slug}/?ref=read_fresh`} className="linkText">{img.title}</a>
                          <div className="auth-name">{img.auth_display.display_name}</div>
                          <div className="auth-details">{img.pub_date}</div>
                          </div>
                          </div>
                          </div>
                                    )
                                })
                            }
                        </>
                        )
                })
            : null
            }
                </div>
            </div>


            {imgData.fetching && (
                //Images Fetched
                    <div className="text-center">
                    <p >Scoopwhoop Is Fetching Please Wait....</p>
                    </div>
                )}
            <div id='page-bottom-boundary' style={{ border: '2px solid blue' }} ref={bottomBoundaryRef}></div>

        </div>
    )
}
