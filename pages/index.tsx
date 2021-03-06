import React,{useState} from 'react'
import { FileUploader } from "react-drag-drop-files";
import Link from 'next/link';
import Head from 'next/head'



const Home = () => {

  const [chooseWorkModal, setchooseWorkModal] = useState("");
  const [uploadWorkModal, setuploadWorkModal] = useState("hidden");


  const [imageURL, setimageURL] = useState("/images/image1.svg");

  const [dropDownHeight, setdropDownHeight] = useState('dropDownHeight overflow-y-hidden');





  const [dropDown1, setdropDown1] = useState('opacity-0 invisible -translate-y-6');
  const [dropDown1MainValue, setdropDown1MainValue] = useState('Title');
  const [dropDown1MainSelect1, setdropDown1MainSelect1] = useState('Apple');
  const [dropDown1MainSelect2, setdropDown1MainSelect2] = useState('Google');







  const [dropDown2, setdropDown2] = useState('opacity-0 invisible -translate-y-6');
  const [dropDown2MainValue, setdropDown2MainValue] = useState('Title');
  const [dropDown2MainSelect1, setdropDown2MainSelect1] = useState('Apple');
  const [dropDown2MainSelect2, setdropDown2MainSelect2] = useState('Google');








  
  const [dropDown3, setdropDown3] = useState('opacity-0 invisible -translate-y-6');
  const [dropDown3MainValue, setdropDown3MainValue] = useState('Title');
  const [dropDown3MainSelect1, setdropDown3MainSelect1] = useState('Apple');
  const [dropDown3MainSelect2, setdropDown3MainSelect2] = useState('Google');






  const [image1, setimage1] = useState('opacity-100');
  const [image2, setimage2] = useState('opacity-40');
  const [image3, setimage3] = useState('opacity-40');
  const [image4, setimage4] = useState('opacity-40');
  const [image5, setimage5] = useState('opacity-40');
  const [image6, setimage6] = useState('opacity-40');
  const [image7, setimage7] = useState('opacity-40');
  const [image8, setimage8] = useState('opacity-40');
  const [image9, setimage9] = useState('opacity-40');
  const [image10, setimage10] = useState('opacity-40');






  const [selectedImage, setSelectedImage] = useState();



const handleChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      
      
    }
  };





  
  


  return (
    <>


<Head>
        <title>Pkazo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>

<link rel="preconnect" href="https://fonts.gstatic.com"/>

<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"></link>
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.11.1/css/all.css"></link>
      </Head>


















           {/* Upload Work */}
           <div className={uploadWorkModal}>
      
      <div className={`modalParent w-screen fixed top-1/2 transition left-1/2  h-screen`}></div>
       
       
       <div className="flex items-center cursor-pointer transition hover:bg-white hover:bg-opacity-20  top-[20px] right-[5px] z-10  absolute  justify-center w-[50px] h-[50px] rounded-full">
       <i className="far fa-times cursor-pointer text-3xl text-gray-300"></i>
       </div>
       
       <div className={`max-w-[1500px] grid px-6 py-7 modal-work-upload  modal rounded-[15px] fixed transition top-1/2 left-1/2 bg-white z-10 max-h-[800px] h-screen `}>
         
       
      {/* asd */}

    
       <div className=" relative uploadModalPrent">
         <div className="overflow-y-scroll  h-full max-h-[380px] uploadImageScroll pl-[0.5rem] flex flex-col items-end">
          
       
         {selectedImage && (
            <img
            onClick={()=>{
              setimageURL(URL.createObjectURL(selectedImage))
              setimage1("opacity-40");
              setimage2("opacity-40");
              setimage3("opacity-40");
              setimage4("opacity-40");
              setimage5("opacity-40");
              setimage6("opacity-40");
              setimage7("opacity-40");
              setimage8("opacity-40");
              setimage9("opacity-40");
              setimage10("opacity-100");

  
  
            }}
            src={URL.createObjectURL(selectedImage)} alt="select image"  className={`w-[147px] h-[147px] cursor-pointer mb-3 rounded-[10px] ${image10}`}/>
        )}
          
          
          <img
          onClick={()=>{
            setimageURL("/images/image1.svg")
            setimage1("opacity-100");
            setimage2("opacity-40");
            setimage3("opacity-40");
            setimage4("opacity-40");
            setimage5("opacity-40");
            setimage6("opacity-40");
            setimage7("opacity-40");
            setimage8("opacity-40");
            setimage9("opacity-40");
            setimage10("opacity-40");



          }}
          src="/images/image1.svg" alt="select image"  className={`w-[147px] h-[147px] cursor-pointer mb-3 rounded-[10px] ${image1}`}/>
          <img 
           onClick={()=>{
            setimageURL("/images/image2.svg")
            setimage1("opacity-40");
            setimage2("opacity-100");
            setimage3("opacity-40");
            setimage4("opacity-40");
            setimage5("opacity-40");
            setimage6("opacity-40");
            setimage7("opacity-40");
            setimage8("opacity-40");
            setimage9("opacity-40");
            setimage10("opacity-40");



          }}
          src="/images/image2.svg" alt="select image"  className={`w-[147px] h-[147px] cursor-pointer mb-3 rounded-[10px] ${image2}`}/>
          <img
           onClick={()=>{
            setimageURL("/images/image3.svg")
            setimage1("opacity-40");
            setimage2("opacity-40");
            setimage3("opacity-100");
            setimage4("opacity-40");
            setimage5("opacity-40");
            setimage6("opacity-40");
            setimage7("opacity-40");
            setimage8("opacity-40");
            setimage9("opacity-40");
            setimage10("opacity-40");



          }}
          src="/images/image3.svg" alt="select image"  className={`w-[147px] h-[147px] cursor-pointer mb-3 rounded-[10px] ${image3}`}/>
          <img
           onClick={()=>{
            setimageURL("/images/image4.svg")
            setimage1("opacity-40");
            setimage2("opacity-40");
            setimage3("opacity-40");
            setimage4("opacity-100");
            setimage5("opacity-40");
            setimage6("opacity-40");
            setimage7("opacity-40");
            setimage8("opacity-40");
            setimage9("opacity-40");
            setimage10("opacity-40");



          }}
          src="/images/image4.svg" alt="select image"  className={`w-[147px] h-[147px] cursor-pointer mb-3 rounded-[10px] ${image4}`}/>
          <img
           onClick={()=>{
            setimageURL("/images/image5.svg")
            setimage1("opacity-40");
            setimage2("opacity-40");
            setimage3("opacity-40");
            setimage4("opacity-40");
            setimage5("opacity-100");
            setimage6("opacity-40");
            setimage7("opacity-40");
            setimage8("opacity-40");
            setimage9("opacity-40");
            setimage10("opacity-40");



          }}
          src="/images/image5.svg" alt="select image"  className={`w-[147px] h-[147px] cursor-pointer mb-3 rounded-[10px] ${image5}`}/>
          <img
           onClick={()=>{
            setimageURL("/images/image6.svg")
            setimage1("opacity-40");
            setimage2("opacity-40");
            setimage3("opacity-40");
            setimage4("opacity-40");
            setimage5("opacity-40");
            setimage6("opacity-100");
            setimage7("opacity-40");
            setimage8("opacity-40");
            setimage9("opacity-40");
            setimage10("opacity-40");



          }}
          src="/images/image6.svg" alt="select image"  className={`w-[147px] h-[147px] cursor-pointer mb-3 rounded-[10px] ${image6}`}/>
          <img
           onClick={()=>{
            setimageURL("/images/image7.svg")
            setimage1("opacity-40");
            setimage2("opacity-40");
            setimage3("opacity-40");
            setimage4("opacity-40");
            setimage5("opacity-40");
            setimage6("opacity-40");
            setimage7("opacity-100");
            setimage8("opacity-40");
            setimage9("opacity-40");
            setimage10("opacity-40");



          }}
          src="/images/image7.svg" alt="select image"  className={`w-[147px] h-[147px] cursor-pointer mb-3 rounded-[10px] ${image7}`}/>
          <img
           onClick={()=>{
            setimageURL("/images/image8.svg")
            setimage1("opacity-40");
            setimage2("opacity-40");
            setimage3("opacity-40");
            setimage4("opacity-40");
            setimage5("opacity-40");
            setimage6("opacity-40");
            setimage7("opacity-40");
            setimage8("opacity-100");
            setimage9("opacity-40");
            setimage10("opacity-40");



          }}
          src="/images/image8.svg" alt="select image"  className={`w-[147px] h-[147px] cursor-pointer mb-3 rounded-[10px] ${image8}`}/>
          <img 
          onClick={()=>{
            setimageURL("/images/image9.svg")
            setimage1("opacity-40");
            setimage2("opacity-40");
            setimage3("opacity-40");
            setimage4("opacity-40");
            setimage5("opacity-40");
            setimage6("opacity-40");
            setimage7("opacity-40");
            setimage8("opacity-40");
            setimage9("opacity-100");
            setimage10("opacity-40");



          }}
          src="/images/image9.svg" alt="select image"  className={`w-[147px] h-[147px] cursor-pointer rounded-[10px] ${image9}`}/>
         </div>
         
      
      <label htmlFor='uploadNewImage' className="flex items-center bg-[#F3F3F3] transition hover:bg-[#e6e6e6] cursor-pointer justify-center w-[147px] absolute -bottom-[0.90rem] left-[0.9rem] h-[144px] mb-3 rounded-[7px]">
      <i className="far fa-plus text-[#C4C4C4] text-5xl"></i>
      <input  accept="image/*" onChange={handleChange} type="file" className='hidden' id='uploadNewImage' name='uploadNewImage'/>
      </label>

       </div>



      {/* asd */}




       {/* asd */}


        <div className="h-full relative">
          <img src={imageURL} className='h-full object-cover absolute top-0 left-0 w-full position-center ' />
        </div>



       {/* asd */}



       {/* asd */}


       <div className="h-full relative pl-5">

        <div className="flex items-center gap-5">
          <img src="/images/profile2.png" alt="profile" className='w-[70px]' />
          <div>
          <div className="font-bold text-[18px] opacity-70">James Jean</div>
          <div className='opacity-70 text-[14px]'>Taiwan, United States</div>
          </div>
        </div>


        <input type="text" placeholder='Title' className='w-full border border-gray-300 px-2 py-2 outline-none rounded-lg mt-6 '/>

       <textarea className='resize-none w-full h-[130px] mt-4 outline-none px-2  pb-2' placeholder='Write a description...'></textarea>
  

       <div className={`w-full border  border-gray-300 pt-2 px-2 rounded-lg mt-1 transition overflow-auto ${dropDownHeight}`}>
       <div className={`w-full flex justify-between  `}>
        <div className='text-gray-400 text-[16px]'>In progress Work?</div>

        <div className="flex  justif-end gap-6 pt-[2px]">
          <label
          onClick={()=>{
            setdropDownHeight("dropDownHeight overflow-y-hidden dropDownHeightMax")
          }}
          htmlFor='yes' className="flex cursor-pointer  gap-2">
            <input type="radio" name="radio" id="yes" className='transfrom  cursor-pointer translate-y-[5px]'/>
            <div className="text-gray-400 ">Yes</div>
          </label>

          <label
           onClick={()=>{
            setdropDownHeight("dropDownHeight overflow-y-hidden")
          }}
          htmlFor='no' className="flex cursor-pointer  gap-2">
            <input type="radio" name="radio" id="no" className='transfrom cursor-pointer translate-y-[5px]'/>
            <div className="text-gray-400 ">No</div>
          </label>

        </div>

        </div>

       


       <div className="mt-5 w-full">
         
        <div className="flex justify-between bg-white">
          <div className='text-gray-400 text-[16px]'>Title</div>
               <div
               onClick={
                ()=> {
                  if(dropDown1 === "opacity-0 invisible -translate-y-6"){
                    setdropDown1("opacity-100 visible translate-y-1")
                    setdropDownHeight("dropDownHeight overflow-y-scroll dropDownHeightMax");


                    

                  }
                  else{
                   setdropDown1("opacity-0 invisible -translate-y-6")
                   setdropDownHeight("dropDownHeight overflow-y-hidden dropDownHeightMax");

                  }
                }
              }
               className="w-[136px] px-2 h-[32px] cursor-pointer relative border bg-white border-gray-300 z-10 rounded-full flex items-center justify-between">
                  <div className='text-gray-400 text-[14px]'>{dropDown1MainValue}</div>
                  <i className="fal fa-angle-down text-gray-400 text-xl"></i>
                  <div className={`absolute top-full transform  left-0 w-full border transition border-gray-300 bg-white rounded-lg h-[57px] ${dropDown1}`}>
                    <div
                       onClick={() => setdropDown1MainValue(dropDown1MainSelect1)}
                    className="w-full px-2 text-gray-400 transition hover:text-gray-500 text-[14px] pt-1">{dropDown1MainSelect1}</div>
                    <div
                       onClick={() => setdropDown1MainValue(dropDown1MainSelect2)}
                    className="w-full px-2 text-gray-400 transition hover:text-gray-500 text-[14px] pt-1">{dropDown1MainSelect2}</div>

                  </div>
               </div>
        </div>















        <div className="flex justify-between mt-3 bg-white">
          <div className='text-gray-400 text-[16px]'>Medium</div>
               <div
               onClick={
                ()=> {
                  if(dropDown2 === "opacity-0 invisible -translate-y-6"){
                    setdropDown2("opacity-100 visible translate-y-1")
                    setdropDownHeight("dropDownHeight overflow-y-scroll dropDownHeightMax");
                  }
                  else{
                   setdropDown2("opacity-0 invisible -translate-y-6")
                   setdropDownHeight("dropDownHeight overflow-y-hidden dropDownHeightMax");

                  }
                }
              }
               className="w-[136px] px-2 h-[32px] cursor-pointer relative border border-gray-300 rounded-full flex items-center justify-between">
                  <div className='text-gray-400 text-[14px]'>{dropDown2MainValue}</div>
                  <i className="fal fa-angle-down text-gray-400 text-xl"></i>
                  <div className={`absolute top-full transform  left-0 w-full border transition z-20 border-gray-300 rounded-lg bg-white h-[57px] ${dropDown2}`}>
                    <div
                       onClick={() => setdropDown2MainValue(dropDown2MainSelect1)}
                    className="w-full px-2 text-gray-400 transition hover:text-gray-500 text-[14px] pt-1">{dropDown2MainSelect1}</div>
                    <div
                       onClick={() => setdropDown2MainValue(dropDown2MainSelect2)}
                    className="w-full px-2 text-gray-400 transition hover:text-gray-500 text-[14px] pt-1">{dropDown2MainSelect2}</div>

                  </div>
               </div>
        </div>















        <div className="flex justify-between mt-3 bg-white">
          <div className='text-gray-400 text-[16px]'>Medium</div>
               <div
               onClick={
                ()=> {
                  if(dropDown3 === "opacity-0 invisible -translate-y-6"){
                    setdropDown3("opacity-100 visible translate-y-1")
                    setdropDownHeight("dropDownHeight overflow-y-scroll dropDownHeightMax");

                  }
                  else{
                   setdropDown3("opacity-0 invisible -translate-y-6")
                   setdropDownHeight("dropDownHeight overflow-y-hidden dropDownHeightMax");

                  }
                }
              }
               className="w-[136px] px-2 h-[32px] cursor-pointer relative border border-gray-300 rounded-full flex items-center justify-between">
                  <div className='text-gray-400 text-[14px]'>{dropDown3MainValue}</div>
                  <i className="fal fa-angle-down text-gray-400 text-xl"></i>
                  <div className={`absolute top-full transform  left-0 w-full border transition border-gray-300 rounded-lg bg-white h-[57px] ${dropDown3}`}>
                    <div
                       onClick={() => setdropDown3MainValue(dropDown3MainSelect1)}
                    className="w-full px-2 text-gray-400 transition hover:text-gray-500 text-[14px] pt-1">{dropDown3MainSelect1}</div>
                    <div
                       onClick={() => setdropDown3MainValue(dropDown3MainSelect2)}
                    className="w-full px-2 text-gray-400 transition hover:text-gray-500 text-[14px] pt-1">{dropDown3MainSelect2}</div>

                  </div>
               </div>
        </div>


















       </div>
    





       </div>
       



<button className="absolute bottom-0 left-5 shareButton font-bold text-[18px] bg-[#E44C4D] rounded-full h-[45px] flex items-center justify-center text-white transition hover:bg-[#be4040]">Share</button>



       </div>


       {/* asd */}








             
       </div>
         </div>

















           {/* Choose Work */}
   <div className={chooseWorkModal}>
      
<div className={`modalParent w-screen fixed top-1/2 transition left-1/2  h-screen`}></div>
 
 
 <div className="flex items-center cursor-pointer transition hover:bg-white hover:bg-opacity-20  top-[20px] right-[5px] z-10  absolute  justify-center w-[50px] h-[50px] rounded-full">
 <i className="far fa-times cursor-pointer text-3xl text-gray-300"></i>
 </div>
 
 
 
 <div className={`max-w-[1500px]  px-10 py-10 grid gap-10 grid-cols-2  modal rounded-[15px] fixed transition top-1/2 left-1/2 bg-white z-10 max-h-[800px] h-screen `}>
   
   <label 
   onClick={()=>{
    setchooseWorkModal('hidden');
    setuploadWorkModal('');
   }}
   htmlFor="uploadNewImage" className='font-bold cursor-pointer absolute top-[140px] z-50 left-1/2 -translate-x-1/2 text-[18px] bg-[#E44C4D] w-[271px] transition hover:bg-[#be4040] h-[45px] text-white flex items-center justify-center rounded-full'>
   Upload from computer

   </label>
 
 <div className='relative min-h-full '>
   <img src="/images/posts.svg" alt="icon" className='mx-auto w-[140px] mt-12' />
   <div className='text-[20px] text-gray-500 mt-[60px] ml-16'>Engage your audience with social posts: anything from a video of your new studio or photos of a work in progress!</div>
   <button
   onClick={() => {
     setchooseWorkModal('hidden');
     setuploadWorkModal('');

   }}
   className='font-bold absolute bottom-0 left-1/2 -translate-x-1/2 text-[18px] bg-[#E44C4D] w-[170px] transition hover:bg-[#be4040] h-[45px] text-white flex items-center justify-center rounded-full'>Posts</button>
 </div>
 
 
 
 
 <div className='relative min-h-full '>
   <img src="/images/works.svg" alt="icon" className='mx-auto w-[180px] mt-12' />
   <div className='text-[20px] text-gray-500 mt-[30px] ml-16'>Display your completed works in your portfolio and list them on the marketplace!</div>
   <button className='font-bold absolute bottom-0 left-1/2 -translate-x-1/2 text-[18px] bg-[#E44C4D] w-[170px] transition hover:bg-[#be4040] h-[45px] text-white flex items-center justify-center rounded-full'>Works</button>
 </div>
 
 
 
 
 </div>
   </div>

    </>
  )
}

export default Home