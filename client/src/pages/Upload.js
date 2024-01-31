import { React, useContext, useState, useRef} from 'react'
import portfolioContext from '../context/portfolioContext'
import HeaderBar from '../components/HeaderBar'
import './Upload.css'

const Upload = () => {
  const context = useContext(portfolioContext)
  const { addPortfolios } = context
  const [portfo, setPortfo] = useState({ name: "", description: "", education: "", pdfFile: null, tag: "" })
  const [submitStatus, setSubmitStatus] = useState(null);
  const fileInputRef = useRef(null);

  const onChange = (e) => {
    if (e.target.type === "file") {
      setPortfo({ ...portfo, pdfFile: e.target.files[0] });
    } else {
      setPortfo({ ...portfo, [e.target.name]: e.target.value });
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    try {
      addPortfolios(portfo.name, portfo.description, portfo.education, portfo.pdfFile, portfo.tag);
    setPortfo({ name: "", description: "", education: "", pdfFile: null, tag: "" })
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setSubmitStatus('success');
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    }
    
  }

  return (
    <>
      <HeaderBar heading={"Upload"} string1={"Empower Your Story,"} string2={"Elevate Your Career:"} string3={"<b>Share Your Portfolio.</b>"} img={"/assets/portoExplorepage.png"} />
      <div className="formcontainer">
        <form action="/explore" method='post' encType="multipart/form-data" target="_parent" onSubmit={handleClick} autoComplete='off'>
          <div className="containercentre">
            <div className="container-centre">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" name="name" id="name" placeholder="name" value={portfo.name} onChange={onChange} minLength={3} required />
              </div>
              <div className="mb-3 descriptionBox">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea  type="text" className="form-control desc" name="description" id="description" placeholder="description" value={portfo.description} onChange={onChange} minLength={5} required />
              </div>
              <div className="mb-3">
                <label htmlFor="education" className="form-label">Education</label>
                <input type="text" className="form-control" name="education" id="education" placeholder="education" value={portfo.education} onChange={onChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tag</label>
                <input type="text" className="form-control" name="tag" id="tag" placeholder="tag" value={portfo.tag} onChange={onChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Upload PDF</label>
                <input ref={fileInputRef} className="form-control" type="file" id="formFile" name='pdf' onChange={onChange} accept=".pdf" required />
              </div>
              <button disabled={portfo.name.length < 3 || portfo.description.length < 5 || portfo.pdfFile == null} type="submit" className="uploadSubmitButton">Add</button>
            </div>
            {submitStatus === 'success' && (
                <div className="success-message">Successfully submitted!</div>
              )}
              {submitStatus === 'error' && (
                <div className="error-message">Error, please try again.</div>
              )}
          </div>
        </form>
      </div>
    </>
  )
}

export default Upload
