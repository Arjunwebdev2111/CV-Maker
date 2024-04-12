import { useState } from "react";
export var certificatesarr=[];
function Certification({customIcon,iconStyle}){
    const [count,setCount]=useState(2);
    const [certificateslist,setCertificateList]=useState([{id:"1",certificate:"",year:""}]);

    const  handleAddCertificate=()=>{
        setCount(count+1);
        setCertificateList([...certificateslist,{id:`${count}`,certificate:"",year:""}]);
    }

    const handleEditCertificate=(id,field,value)=>{
        setCertificateList(certificateslist.map((certificate)=>certificate.id===id?{...certificate,[field]:value}:certificate
        ))
        
    }

    const handleDeleteCertificate=(id)=>{
        setCertificateList(certificateslist.filter(certificate =>certificate.id !=id   
 
        ));
    }

    const handleSave=()=>{
        certificatesarr=certificateslist;
    };

    return(
        <section className="container my-4 py-2 shadow p-3 mb-5  rounded bg-white"> 
            <div className="row mb-2 py-2">
                <p className="pb-3 h4 text-primary col-lg-9 col-7  mx-1  ">Certificates:</p>
                <button className='btn h4 btn-success rounded-pill shadow col-lg-1 col-4  mx-1'  onClick={()=>{handleAddCertificate()}}>Add &nbsp;<img src={customIcon.addIcon} style={iconStyle} />  </button>
            </div>
            <hr className='border border-5 border-warning shadow  '/>
            {certificateslist.map((certificate) => (
                <div key={certificate.id}>
                    <div className="row mb-1">
                        <p className="pb-3 h6 text-success  py-2 col-lg-9 col-7  mx-1"></p>
                        <button className='btn h4 btn-danger py-2 px-0 rounded-pill shadow col-lg-1 col-4 mx-1  ' onClick={()=>{handleDeleteCertificate(certificate.id);}}>Delete &nbsp;<img src={customIcon.deleteIcon} style={iconStyle}/></button>
                    </div>

                    <label className="row mb-4 mx-1 ">
                        <span className="col-4">Certificate:
                        <span className="text-danger h4">*</span>
                        </span>
                        <input className="mx-2 col-7" type="text" placeholder="Certificates" value={certificate.certificate} onChange={(e)=>{handleEditCertificate(certificate.id,"certificate",e.target.value);}}  />
                    </label>

                    <label className="row mb-4 mx-1 ">
                        <span className="col-4">Month and Year:
                        <span className="text-danger h4">*</span>
                        </span>
                        <input className="mx-2 col-7" type="text" placeholder="Nov 2021 - Nov 2023" value={certificate.year} onChange={(e)=>{handleEditCertificate(certificate.id,"year",e.target.value);}}  />
                    </label>
                </div>
            ))}
            <div className="text-center">
                <button className="my-2 btn btn-primary border border-2 border-dark shadow" onClick={()=>handleSave()}>Save</button>       
            </div>
        </section>
    );
}
export default Certification ;