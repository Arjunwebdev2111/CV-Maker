import { useState } from "react";
export var personarr=[];
function Person(){   

    // persons Array contains values
    const [persons,setPerson] = useState([{id:"1",name:"",address:"",email:"",phone:""}])    
    
    //Event handler for onChange in input field. 
    const handleEditPerson=(id,field,value)=>{
            setPerson(persons.map(person => (person.id == id)? {...person,[field]:value}:person ));
            
    }
    
    const handleSave=()=>{
        personarr = persons;
    }
    
    return(
    <>
        <section className="container my-4 py-2 shadow p-3 mb-5  rounded bg-white">
            <h4 className="pb-3 text-primary">Personal Details:</h4>
            <hr className='border border-5 border-warning shadow '/>

            <form className="py-4 ">
                {persons.map((person)=>(
                        <div key={person.id}>

                            <label className="row mb-4 mx-1 ">
                                <span className="col-4">Full Name:
                                <span className="text-danger h4">*</span>
                                </span>
                                <input className="mx-2 col-7" type="text" placeholder="Full Name" value={person.name} onChange={(e) => handleEditPerson(person.id, 'name', e.target.value)} />
                            </label>

                           
                            <label className="row mb-4 mx-1 ">
                                <span className="col-4">Address:
                                    <span className="text-danger h4">*</span>
                                </span>
                                <input className="mx-2 col-7" type="text" placeholder="Address" value={person.address} onChange={(e) => handleEditPerson(person.id, 'address', e.target.value)} />
                            </label>

                            <label className="row mb-4 mx-1 ">
                                <span className="col-4">Email:
                                <span className="text-danger h4">*</span>
                                </span>
                                <input className="mx-2 col-7" type="email" placeholder="Email" value={person.email} onChange={(e) => handleEditPerson(person.id, 'email', e.target.value)}/>
                            </label>

                            <label className="  row mb-4 mx-1 ">
                                <span className="col-4">Phone No:
                                <span className="text-danger h4">*</span>
                                </span>
                                <input className="mx-2 col-7  " type="text" placeholder="Phone" value={person.phone} onChange={(e) => handleEditPerson(person.id, 'phone', e.target.value)}/>
                            </label>
                                
                            </div>
                    ))}  
                    <div className="text-center">
                        <p className="my-2 btn btn-primary border border-2 border-dark shadow" onClick={()=>handleSave()}>Save</p>       
                    </div>              
            </form>
            
        </section>
    </>
    );
}

export default Person;