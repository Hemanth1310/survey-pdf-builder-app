import React, { useEffect,useRef,useState } from 'react'
import './ViewSurvey.css'
import { useSelector } from 'react-redux'
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
const ViewSurvey = () => {

    const formdata =useSelector(store=>store.survey)

        const pdfRef = useRef();
    const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

    const downloadPDF = async () => {
        setIsGeneratingPDF(true);
        const input = pdfRef.current;
        
        try {
            const canvas = await html2canvas(input, {
                scale: 2,
                useCORS: true,
                logging: false
            });
            
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 210; // A4 width in mm
            const pageHeight = 297; // A4 height in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;
            
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
            
            // Add more pages if needed
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            
            pdf.save(`${formdata.surveyName || 'survey'}.pdf`);
        } catch (error) {
            console.error('Error generating PDF:', error);
        } finally {
            setIsGeneratingPDF(false);
        }
    };

    useEffect(()=>console.log(formdata))
  return (
    <>

    {formdata.questions.length!=0?
    <>
     <div className='ViewSurvey-container' >
        <div className='Survey-Container' ref={pdfRef}>
                <h1>{formdata.surveyName}</h1>
                <h3>{formdata.surveyDescription}</h3>
                {formdata.questions.map((item,index)=>(
                    <div className='Listing-survey' key={item.id} >
                        
                        <div className='Question-template'>{index+1}. {item.question}</div>
                        {item.answerType==='short-answer'? 
                        <div className='Answer-box'>  <div className='Short-answer-area'></div></div>
                        :item.answerType==='MCQ'?
                            <div className='Answer-box'>
                            <span style={{display:'flex',gap:'10px',alignItems:'center',fontSize:'20px'}}> <div className="checkbox-blank"></div>{item.options.mcqOpt1}</span>
                                <span style={{display:'flex',gap:'10px',alignItems:'center',fontSize:'20px'}}> <div className="checkbox-blank"></div>{item.options.mcqOpt2}</span> 
                                <span style={{display:'flex',gap:'10px',alignItems:'center',fontSize:'20px'}}> <div className="checkbox-blank"></div>{item.options.mcqOpt3}</span> 
                                <span style={{display:'flex',gap:'10px',alignItems:'center',fontSize:'20px'}}> <div className="checkbox-blank"></div>{item.options.mcqOpt4}</span> 
                            </div>:
                            <div className='Answer-box'>
                                <div style={{display:'flex',gap:'10px',alignItems:'center',fontSize:'20px'}}><div className='tf-circle'></div>True</div>  
                                <div style={{display:'flex',gap:'10px',alignItems:'center',fontSize:'20px'}}><div className='tf-circle'></div>False</div> 
                            </div>
                            }
                    
                    </div>
                ))}
       </div>
    </div>
    <div className='ViewSurvey-container'>
        <div>Click Below To downLoad</div>
         <button 
                    className="submit-btn"
                    onClick={downloadPDF}
                    disabled={isGeneratingPDF}
                >
                    {isGeneratingPDF ? 'Generating PDF...' : 'Download as PDF'}
                </button>
    </div>
    </>
    : 
    <div className='ViewSurvey-container'>
        <h3>No questions added to this survey yet</h3>
        
    </div>}
    

    </>
  )
}

export default ViewSurvey