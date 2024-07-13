import {useState} from 'react'
const App= ()=>{

    const [image,showImage]=useState(true);
    const test=()=>{
      showImage(!image)
    }
    const [bg,setBg]= useState('purple');
    const [fontSize, setFontSize] = useState(30);
    
  return(
    <div style={{minHeight:'100vh',background:'grey'}}>  
        <div style={{background:'white',padding:48,width:'50%',margin:'auto'}}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <h1 style={{padding:0,marginButtom:4}}>Coding Testing</h1>
          <p style={{padding:0,margin:0,color:'purple'}}>State management react Learning</p>
            </div>
            <div>
              <h2>Show and hide app </h2>
              {image && <img style={{width:'100%'}} src='./image/flower.jpg'/>}

              <button onClick={test} style={{
                backgroundColor: 'tomato',
                color: 'white',
                padding: '10px 20px',
                margin: '20px',
              }}>
                {image?'Hide Me': 'Show Me'}</button>
                <div>
                  <h2>Background Toggle</h2>
                  <div style={{
                    width: 350,
                    height: 200,
                    background: bg,
                    borderRadius: '16px'
                  }}>
                  </div>
                  <button onMouseOver={()=>{
                    setBg(bg==='purple'? 'red': 'purple')
                  }} style={{
                backgroundColor: 'tomato',
                color: 'white',
                padding: '10px 20px',
                margin: '20px',
              }}>{bg==='purple'?  'PURPLE': 'RED'}</button>
                </div>
                <div>
                  <h2>
                    Set the font size 30 to 200
                  </h2>
                  <p style={{fontSize: fontSize}}>Hi i am Chandra Sekhar </p>
                  <input type= 'range'style={{margin: '100px'}} min='30'max='150 ' step='1'
                  onChange={(e)=>{setFontSize(Number(e.target.value))}}                />
                </div>
             
            </div>
        </div>
    </div>
  )
}
export default App; 