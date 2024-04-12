import { useState } from "react";
export var experiencearr=[];
function Experience({customIcon,iconStyle}){
    const [count,setCount]=useState(1);
    const [experiencelist, setExperienceList] = useState([
        { id: 1, role:'',summary: '',year: '' }
      ]);
    
      const handleAddExperience = () => {
        setCount(count+1);
        if(experiencelist.length<3){
          
          setExperienceList([...experiencelist, { id: `${count}`, role:'',summary: '',year: ''}]);
          
        } 
      };
    
      const handleDeleteExperience = (id) => {
        setExperienceList(experiencelist.filter(exp => exp.id !== id));
      };
    
      const handleEditExperience = (id, field, value) => {
        setExperienceList(experiencelist.map(exp => (exp.id === id ? { ...exp, [field]: value } : exp)));
        
      };

      const handleSave=()=>{
        experiencearr=experiencelist;
    };
       
    return(
        <>
            <section className="container my-4 py-2 shadow p-3 mb-5  rounded bg-white">
                <div className="row mb-2 py-2">
                    <p className="pb-3 h4 text-primary col-lg-9 col-7 ">Work Experience Details:</p>
                    <button className='h-50 py-2  h4 btn  btn-success rounded-pill shadow col-lg-1 col-4 mx-1 ' onClick={handleAddExperience}>Add  &nbsp;<img src={customIcon.addIcon} style={iconStyle} /> </button>
                </div>
                <hr className='border border-5 border-warning shadow '/>
                {experiencelist.map((exp)=>(
                    <div key={exp.id}>
                        <div className="row mb-1 ">
                            <p className="pb-3 h6 text-success  py-2 col-lg-9 col-7 ">Experience Detail:</p>
                            <button className='btn h4 btn-danger py-2 px-0 rounded-pill shadow col-lg-1 col-4 mx-1 '  onClick={() => handleDeleteExperience(exp.id)}>Delete &nbsp; 
                                <img src={customIcon.deleteIcon} style={iconStyle} />
                            </button>
                        </div>
                        <label className="row mb-4 mx-1 ">
                            <span className="col-12">Summary:
                                <span className="text-danger h4">*</span>
                            </span>
                            <textarea  className="mx-2 " style={{resize:"none"}} rows="6" type="text"  value={exp.summary} placeholder="summary of your work" onChange={(e)=>{handleEditExperience(exp.id,'summary',e.target.value)}}></textarea>
                        </label>

                        <label className="row mb-4 mx-1 ">
                            <span className="col-4">Month and Year:
                                <span className="text-danger h4">*</span>
                            </span>
                            <input className="mx-2 col-7" type="text" value={exp.year} onChange={(e)=>{handleEditExperience(exp.id,'year',e.target.value)}} placeholder="Nov 2021 - Nov 2023"/>
                        </label>

                        <label className="row mb-4 mx-1 ">
                            <span className="col-4">Role:
                                <span className="text-danger h4">*</span>
                            </span>
                            <input className="mx-2 col-7" type="text" value={exp.role} onChange={(e)=>{handleEditExperience(exp.id,'role',e.target.value)}} placeholder="Role or Position"/>
                        </label>
                    </div>
                ))
                }
                <div className="text-center">
                    <button className="my-2 btn btn-primary border border-2 border-dark shadow" onClick={()=>handleSave()}>Save</button>       
                </div>
            </section>
        </>
    );
}
export default Experience;