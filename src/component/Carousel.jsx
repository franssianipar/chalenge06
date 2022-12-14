import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avenger from '../avenger.jpg'
import { FaPlayCircle, FaSearch } from "react-icons/fa"
import './Carousel.css'
import {  useState } from "react"
import axios from "axios";
import { useEffect } from "react";
import {  useParams } from "react-router-dom"
import { API_KEY } from "../util/constant"
import Googlelogin from "./Googlelogin";




export default function Carousel(props) {


    const [inputan,setInputan]= useState('')
    const [details, setDetail] = useState({})
    const params = useParams();



    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/' + params.id, {
                headers: {
                    "Authorization": "Bearer " + API_KEY
                }
            })
            .then((resp)=>{
                setDetail(resp.data)
                console.log("Ini response:" + resp)
            })
            .catch((err)=>{
                console.log("Ini error:" + err)
            })
    }, [])


    return (
        <>
            
            <div className="Menu "> 
                <div className="  w-full flex pt-2 pl-5 z-10" >
                        <h1 className="text-red-600 text-5xl font-bold"> Movielist</h1>
                        <div className="border-2 flex-auto border-rose-600 rounded-full w-2/5 ml-60 flex px-5">
                            <input className="focus:outline-0 w-full border-0 outline-0 h-full border-0 bg-transparent" type="text" placeholder="what do you want to watch?" onChange={function(e){
                            setInputan(e.target.value)
                    }}/>
                            <button className="ml-auto text-white" onClick={() => {
                                props.setSearch(inputan)
                            }}>
                                <FaSearch />
                            </button>
                        </div>
                        {
                            localStorage.getItem("token") === null && 
                                <button className="ml-44 w-1/12 border-2 rounded-full border-rose-600 text-white"onClick={()=>props.setShowMyModal(true)}> Login</button>                                
                        }
                        {
                            localStorage.getItem("token") === null ?
                                <button className="ml-5 mr-5 bg-red-600 rounded-full w-1/12 " onClick={()=>props.setShowModal(true)}> Register</button>
                                :!"token"?(<Googlelogin />)
                                :(
                                    <button className="ml-5 mr-5 bg-red-600 rounded-full w-1/12 " onClick={()=> {
                                    localStorage.removeItem("token")
                                    window.location.reload()
                                }}> Logout</button>

                                )
                                
                                
                        }

                        
                        
                </div>
                <div className="Slider">
                <Slider dots={true} autoplay={true}>
                    {/* Slide 1 */}
                    <div className="h-[500px] w-[100%]">
                    <div className="bg-cover bg-center h-full" style={{ backgroundImage: `url(${avenger})` }}  >
                                <div className="flex flex-col pl-[20px] pt-[100px] h-68 w-5/12">
                                <div className="">
                                        <h1 className="text-5xl text-white">
                                            Doctor strange in the multiverse of madness
                                        </h1>
                                    </div>
                                    <div className="text-white">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quas at quae tempora, delectus excepturi suscipit sapiente sint repellendus sit non alias
                                        assumenda ratione aspernatur numquam recusandae velit distinctio iste.
                                    </div>
                                    <div className="mb-auto flex mt-10">
                                        <button className="bg-red-600 rounded-full w-1/3 h-14 flex items-center" >
                                            <FaPlayCircle size={30} className="ml-2  text-white" />
                                            <span className="text-lg ml-5 text-white">Watch Trailer</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                    </div>
                        {/* End Slide 1 */}
                        {/* Slide 2 */}
                        <div className="h-[500px] w-[100%]">
                            <div className="bg-cover bg-center h-full" style={{ backgroundImage: `url(${avenger})` }} >
                                <div className="flex flex-col pl-[20px] pt-[100px] h-68 w-5/12">
                                    <div className="">
                                        <h1 className="text-5xl text-white">
                                            Doctor strange in the multiverse of madness
                                        </h1>
                                    </div>
                                    <div className="text-white">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quas at quae tempora, delectus excepturi suscipit sapiente sint repellendus sit non alias
                                        assumenda ratione aspernatur numquam recusandae velit distinctio iste.
                                    </div>

                                    <div className="mb-auto flex mt-10">
                                        <button className="bg-red-600 rounded-full w-1/3 h-14 flex items-center" >
                                            <FaPlayCircle size={30} className="ml-2  text-white" />
                                            <span className="text-lg ml-5 text-white">Watch Trailer</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Slide 2 */}
                        <div className="h-[500px] w-[100%]">
                            <div className="bg-cover bg-center h-full" style={{ backgroundImage: `url(${avenger})` }} >
                                <div className="flex flex-col pl-[20px] pt-[100px] h-68 w-5/12">
                                    <div className="">
                                        <h1 className="text-5xl text-white">
                                            Doctor strange in the multiverse of madness
                                        </h1>
                                    </div>
                                    <div className="text-white">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quas at quae tempora, delectus excepturi suscipit sapiente sint repellendus sit non alias
                                        assumenda ratione aspernatur numquam recusandae velit distinctio iste.
                                    </div>

                                    <div className="mb-auto flex mt-10">
                                        <button className="bg-red-600 rounded-full w-1/3 h-14 flex items-center" >
                                            <FaPlayCircle size={30} className="ml-2  text-white" />
                                            <span className="text-lg ml-5 text-white">Watch Trailer</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>    
                </Slider>   

                </div>
                
                    
            </div>
                
        </>
    )
}