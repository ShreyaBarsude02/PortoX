import {React,useState} from 'react'
import portfolioContext from "./portfolioContext";

const PortfolioState = (props) => {
    const host = "http://localhost:5000"
    const initialPortfolios = []
    const [portfo,setPortfo] = useState(initialPortfolios)
    const [pdfName,setPdfName] = useState('')

    const getPortfolios = async () =>{
        try {
            const response = await fetch(`${host}/getPortfolios`, {
              method: 'GET'
            });
            const json = await response.json();
            setPortfo(json);
          } catch (error) {
            console.error('Error fetching portfolios:', error);
          }
    }

    const addPortfolios = async (name,description,education,pdfFile,tag) =>{
        try {
            const formData = new FormData();
            formData.append('name',name)
            formData.append('description',description)
            formData.append('education',education)
            formData.append('pdf',pdfFile)
            formData.append('tag',tag)

            const response = await fetch(`${host}/addPortfolios`,{
                method: 'POST',
                body: formData
            })

            const portfolio = await response.json()
            setPortfo(portfo.concat(portfolio))
        } catch (error) {
            console.error('Error adding portfolio:', error);
        }
        
    }

    const getPdf = async (id) =>{
      try {
        const response = await fetch(`${host}/getPdf/${id}`, {
          method: 'GET'
        });
        const json = await response.json();
        setPdfName(json)
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      }
    }

  return (
    <portfolioContext.Provider value={{portfo,getPortfolios,addPortfolios,getPdf,pdfName}}>
        {props.children}
    </portfolioContext.Provider>
  )
}

export default PortfolioState
