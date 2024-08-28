import React, { useEffect, useState } from 'react'
import './QRCodeGenerator.css'
import QRCode from 'react-qr-code'
const QRCodeGenerator = () => {
    const [qrCode,setQrCode]=useState('');
    const [input,setInput]=useState('');
    const [autoGenerate,setAutoGenerate]=useState(true);
    // const [checked,setChecked]=useState(true);

    const handleChecking=()=>{
        setAutoGenerate(!autoGenerate);  
                         
    }
    const handleQrCodeGenerate=()=>{
        setQrCode(input);
    }
   
    useEffect(()=>{
        setInput('');
        setQrCode('') ; 
    },[autoGenerate])
  return (
    <div className='qr-code-generator'>
        <h1 className='title'>QR Code Generator</h1>
        <section>
            <div className='qr-input-value'>
                <input type="text"
                 placeholder='Enter yuor value ...' 
                 defaultValue={input}    
                 value={(autoGenerate)? qrCode:input}      
                onChange={(e)=>{
                    (autoGenerate)? setQrCode(e.target.value) : setInput(e.target.value)
                }}
                />
                <input type="checkbox" 
                defaultChecked={autoGenerate} 
                onChange={handleChecking} />
                <button 
                    type="button"
                    onClick={handleQrCodeGenerate}
                    disabled={!autoGenerate ? false : true}
                >Generate</button>
            </div>
            <div className="qr-code mt-3">
                <QRCode 
                    id='qr-code'
                    value={qrCode}
                />
            </div>
        </section>
    </div>
  )
}

export default QRCodeGenerator