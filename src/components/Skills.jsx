import { useState } from "react";
export var skillsarr=[];
function Skills({customIcon,iconStyle}){
    const [count,setCount]=useState(2);
    const [skillslist,setSkillsList]=useState([{id:"1",skill:""}]);
    const  handleAddSkill=()=>{
        // console.log("reached");
        setCount(count+1);
        // let newSkill={id:`${count}`,skill:""};
        setSkillsList([...skillslist,{id:`${count}`,skill:""}]);
        // console.log(skillslist);
    }
    const handleEditSkill=(id,field,value)=>{
        setSkillsList(skillslist.map((skill)=>skill.id===id?{...skill,[field]:value}:skill
        ))
        
        // console.log(skillslist);
    }
    const handleDeleteSkill=(id)=>{
        setSkillsList(skillslist.filter(skill =>skill.id !=id)); 
            // console.log("skilllid"+skill.id)
            // console.log("id"+id)
        
    }

    const handleSave=()=>{
        skillsarr=skillslist;
    }
    return(
        <section className="container my-4 py-2 shadow p-3 mb-5  rounded bg-white"> 
            <div className="row mb-2 py-2">
                <p className="pb-3 h4 text-primary col-lg-9 col-7  mx-1 ">Skills:</p>
                <button className='btn h4 btn-success rounded-pill shadow col-lg-1 col-4  mx-1'  onClick={()=>{handleAddSkill()}}>Add &nbsp;<img src={customIcon.addIcon} style={iconStyle} />  </button>
            </div>
            <hr className='border border-5 border-warning shadow '/>
            {skillslist.map((skill) => (
                <div key={skill.id}>

                    <div className="row mb-1 ">
                        <p className="pb-3 h6 text-success  py-2 col-lg-9 col-7  mx-1 "></p>
                        <button className='btn h6 btn-danger py-2 px-2 rounded-pill shadow col-lg-1 col-4  mx-1 ' onClick={()=>{handleDeleteSkill(skill.id);}}>Delete &nbsp;<img src={customIcon.deleteIcon} style={iconStyle}/></button>
                    </div>

                    <label className="row mb-4 mx-1 ">
                        <span className="col-4">Skill:
                        <span className="text-danger h4">*</span>
                        </span>
                        <input className="mx-2 col-7" type="text" placeholder="Skills" value={skill.skill} onChange={(e)=>{handleEditSkill(skill.id,"skill",e.target.value);}}  />
                    </label>
                </div>
            ))}
            <div className="text-center">
                <button className="my-2 btn btn-primary border border-2 border-dark shadow" onClick={()=>handleSave()}>Save</button>       
            </div>
        </section>
    );
}
export default Skills;