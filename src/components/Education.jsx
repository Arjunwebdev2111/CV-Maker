import { useState } from 'react';
export var educationarr=[];
const Education = ({customIcon,iconStyle}) => {
  const [educationList, setEducationList] = useState([
    { id: 1, institution: '', degree: '', year: '' }
  ]);

  const handleAddEducation = () => {
    if(educationList.length<6){
      
      setEducationList([...educationList, { id: Date.now(), institution: '', degree: '', year: '' }]);
      
    } 
  };

  const handleDeleteEducation = (id) => {
    setEducationList(educationList.filter(edu => edu.id !== id));
  };

  const handleEditEducation = (id, field, value) => {
    setEducationList(educationList.map(edu => (edu.id === id ? { ...edu, [field]: value } : edu)));
    
  };

  const handleSave=()=>{
    educationarr=educationList;
}
    
  return (
    <section className="container my-4 py-2 shadow p-3 mb-5  rounded bg-white"> 
      <div className="row mb-2 py-2">
          <p className="pb-3 h4 text-primary col-lg-9 col-7">Education:</p>
          <button className=' h4 btn  btn-success rounded-pill shadow col-lg-1 col-4 mx-1 '  onClick={handleAddEducation}>Add &nbsp;<img src={customIcon.addIcon} style={iconStyle} /> </button>
      </div>
      <hr className='border border-5 border-warning shadow '/>
      {educationList.map((education) => (
        <div key={education.id}>
          <div className="row mb-1">
            <p className="pb-3 h6 text-success  py-2 col-lg-9 col-7 ">Education Detail:</p>
            <button className='btn h6 btn-danger py-2 px-2  rounded-pill shadow col-lg-1 col-4 mx-1 '  onClick={() => handleDeleteEducation(education.id)}>Delete &nbsp;<img src={customIcon.deleteIcon} style={iconStyle} /></button>
          </div>
          <label className="row mb-4 mx-1 ">
            <span className="col-4">Institution Name:
              <span className="text-danger h4">*</span>
            </span>
            <input className="mx-2 col-7" type="text" placeholder="Institution" value={education.institution} onChange={(e) => handleEditEducation(education.id, 'institution', e.target.value)} />
          </label>

          <label className="row mb-4 mx-1 ">
            <span className="col-4">Course:
              <span className="text-danger h4">*</span>
            </span>
            <input className="mx-2 col-7" type="text" placeholder="Degree" value={education.degree} onChange={(e) => handleEditEducation(education.id, 'degree', e.target.value)}/>
          </label>

          <label className="  row mb-4 mx-1 ">
            <span className="col-4">Year:
              <span className="text-danger h4">*</span>
            </span>
            <input className="mx-2 col-7  " type="text" placeholder="Year" value={education.year} onChange={(e) => handleEditEducation(education.id, 'year', e.target.value)}/>
          </label>
            
        </div>
      ))}
      <div className="text-center">
        <button className="my-2 btn btn-primary border border-2 border-dark shadow" onClick={()=>handleSave()}>Save</button>       
      </div>
    </section>
  );
};

export default Education;