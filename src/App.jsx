import Objective from "./components/Objective";
import Education from "./components/Education";
import Person from "./components/Personal";
import Experience from "./Experience";
import Cvtemplate from "./components/Cvtemplate";
import { useState } from "react";
import Skills from "./components/Skills";
import Certification from "./components/Certification";
// import CustomEye from "./assets/icons/CustomEye";
import EyeIcon from "./assets/icons/eye-icon.webp";
import Add from "./assets/icons/plus-round-icon.webp";
import Trash from "./assets/icons/recycle-bin-icon.webp";
import BackArrow from "./assets/icons/round-black-left-arrow-icon.webp";

function App() {
  const iconInlineStyle = {height:"20px",width:"20px"};
  const [view,setView]=useState(false);

  const handleView=()=>{
    setView(!view);
  }

  return (
    <>
      <nav className="navbar mb-2 shadow text-white bg-dark">
        <div className="container ">
          <h1 className="">Project CV Maker</h1>
          <button className="d-flex h-3 btn btn-warning rounded-pill px-3 py-1" onClick={()=>handleView()}>
            <img src={EyeIcon} style={{height:"20px",width:"20px",paddingTop:"8px"}}  alt={"view"} /><span className="h5">&nbsp;View</span>
          </button>
        </div>
        {view===true?
            ( 
              <button className=" btn btn-primary rounded-pill px-4 " onClick={()=>handleView()}>
                <img src={BackArrow} style={{height:"25px",width:"25px",paddingBottom:"5px"}}  alt={"view"} /> &nbsp;
                <span className="h5 " >Back</span>
              </button>
            )
            :null
        }
      </nav>
      
      {view===false?
        (
          <main className="bg-light rounded my-3 " >
            <Person/>
            <Objective />
            <Education customIcon ={{"addIcon":Add,"deleteIcon":Trash}} iconStyle = {iconInlineStyle}/>
            <Experience customIcon ={{"addIcon":Add,"deleteIcon":Trash}} iconStyle = {iconInlineStyle}/>
            <Skills customIcon ={{"addIcon":Add,"deleteIcon":Trash}} iconStyle = {iconInlineStyle}/>
            <Certification customIcon ={{"addIcon":Add,"deleteIcon":Trash}} iconStyle = {iconInlineStyle}/>

          </main>
        ):
        (
          <main className="bg-white  rounded my-3 "  >
            
             <Cvtemplate/>
            
          </main>
        )
      }   
      <footer className="footer-bottom py-3 bg-dark">
        <p className="text-primary text-center">Powered by Arjun.S</p>
      </footer>
      
    </>

  );
}
export default App;
