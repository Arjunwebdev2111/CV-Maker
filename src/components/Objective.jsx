import { useState } from "react";
export var summary="";
function Objective(){
    let [objective,setObjective]=useState("");
    
    const handleObj=(event)=>{
        setObjective(event);
        
    }

    const handleSave=()=>{
        summary=objective;
    }
    
    return(
        <section className="container my-4 py-2 shadow p-3 mb-5  rounded bg-white">
            <h4 className="py-2 text-primary">Objective:<span className="text-danger h4">*</span></h4>
            <hr className='border border-5 border-warning shadow '/>            
            <textarea onChange={(event)=>{handleObj(event.target.value)}} rows="4" style={{ resize: "none",width:"100%",height:"150px" }} className="bg-white form-control rounded border border-black text-decoration" ></textarea>
            <div className="text-center">
                <button className="my-2 btn btn-primary border border-2 border-dark shadow" onClick={()=>handleSave()}>Save</button>       
            </div>
        </section>
    );
}
export default Objective;
