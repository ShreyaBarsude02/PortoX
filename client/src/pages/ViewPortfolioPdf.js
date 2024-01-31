import React, {useContext,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import portfolioContext from '../context/portfolioContext';

const ViewPortfolioPdf = () => {
    const context = useContext(portfolioContext);
    const {getPdf,pdfName} = context;
    const { id } = useParams();
    console.log(id)
    useEffect(()=>{
        // eslint-disable-next-line
        getPdf(id)
    },)
    return (
        <div style={{width: '100%', height:'100%'}}>
            <iframe title={id} src={`http://localhost:5000/`+pdfName} width="100%" height="600px" />
        </div>
    )
}
// server\uploads
export default ViewPortfolioPdf
