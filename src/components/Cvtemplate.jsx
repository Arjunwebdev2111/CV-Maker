import {summary} from "./Objective";
import { educationarr } from "./Education";
import { experiencearr } from "../Experience";
import { skillsarr } from "./Skills";
import { certificatesarr } from "./Certification";
import { personarr } from "./Personal";
import Address from "../assets/icons/home-icon.webp";
import Mail from "../assets/icons/email-round-solid-icon.webp";
import Phone from "../assets/icons/call-icon.webp";
import Pdf from "../assets/icons/pdf-files-icon.webp";
import { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function Cvtemplate(){
    const contentRef = useRef(null);

    const handlePrint = () => {
        const content = contentRef.current;

        if (content) {
        html2canvas(content).then((canvas) => {
            const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
            });

        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297); // Adjust dimensions as needed
        pdf.save('cv.pdf');
      });
    }
  };

    const iconInlineStyle = {height:"30px",width:"30px",paddingTop:"2px"};
    return(
     <>
        <div className="row d-flex justify-content-end mb-2">
            <button className="col-1 mx-4  btn btn-danger rounded-pill shadow border border-2 border-dark " onClick={handlePrint}>
                <img  src={Pdf} style={iconInlineStyle} alt={"pdficon"} />   
                <span >&nbsp;&nbsp;Print</span>
            </button>
        </div>
        <section ref={contentRef} >
           
            <div className="row bg-primary py-3  mb-2" id="persondetails">
                <div className="col-9">
                    <h1 className="text-white d-flex px-5 py-4 h1">{personarr[0].name}</h1>
                </div>
                <div className="col-3 ">
                    <ul className="list-unstyled text-white ">
                        <li className="mb-2 d-flex">
                            <img  src={Address} style={iconInlineStyle} alt={"Address"} />&nbsp;&nbsp;
                            <span >{personarr[0].address}</span>
                        </li>
                        <li className="mb-2 d-flex">
                            <img  src={Mail} style={iconInlineStyle} alt={"Mail"} />&nbsp;&nbsp;
                            <span>{personarr[0].email}</span>
                        </li>
                        <li className="mb-2 d-flex">
                            <img  src={Phone} style={iconInlineStyle} alt={"Phone"} />&nbsp;&nbsp;
                            <span>{personarr[0].phone}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div  id="objective">
                <h4 className="row px-5 py-2 text-primary border-top border-bottom border-primary ">Objective:</h4>
                <p className="h5 text-black px-5 mx-5  col-12 ">{summary}</p>
            </div>
            <br/>

            <div>
                <h4 className="  px-4 py-2 text-primary  border-top border-bottom border-primary ">
                    <span className="mx-3">Education:</span>
                </h4>
                {
                    educationarr.map(education=>{
                        return (
                        <><div className="row">
                                <p className="col-4  py-2">
                                    <span className="d-flex mx-5">{education.year}</span>
                                </p>
                                <p className="col-8 py-2 border-start  border-primary">
                                    <h4 className="d-flex">{education.institution}</h4><br/>
                                    {education.degree}<br/>
                                    {/* 86.5% */}
                                </p>                                
                            </div>
                        </>
                        )
                    })}
            </div>
            <br/>

            <div>
                <h4 className="px-4 py-2 text-primary  border-top border-bottom border-primary ">
                    <span className="mx-3">Experience:</span>
                </h4>
                {
                    experiencearr.map(experience=>{
                        return (
                        <>
                        <div className="row">
                            <h5 className="col-4 py-2 "><span className="mx-5">{experience.role}</span><br/>
                                <h6 className="d-flex mx-5">&#40;{experience.year}&#41;</h6>
                            </h5>
                            <p className="col-6 py-2  border-start  border-primary">
                                <span className="d-flex ">{experience.summary}</span>
                            </p>                              
                        </div>
                        </>
                        )
                    })}
            </div>
            <br/>

            <div>
                <h4 className="row px-4 py-2 text-primary border-top border-bottom border-primary ">
                    <span className="mx-3">Skills:</span>
                </h4>
                <div className="d-flex flex-row">
                <ul className="list-unstyled  ">{skillsarr.map((skill)=>{
                    return (<li key={skill.id} className="d-inline-flex mb-2 px-5 py-2 mx-3 bg-primary text-white rounded-pill">{skill.skill}</li>)})
                    }
                </ul></div>
            </div>
            <br/>

            <div>
                <h4 className="row px-4 py-2 text-primary border-top border-bottom border-primary">
                    <span className="mx-3">Certifications:</span>
                </h4>
                <ul >{certificatesarr.map((certificate)=>{
                    return (<li className="mb-2 mx-5 px-5" key={certificate.id}>
                                <span className="h5">{certificate.certificate}</span><br/>
                                <span className="h5">&#40;{certificate.year}&#41;</span>
                            </li>)})
                    }
                </ul>
            </div><br/><br/><br/>
        </section>
    </>
    );
}
export default Cvtemplate;
