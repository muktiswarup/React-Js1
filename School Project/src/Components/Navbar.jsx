const Navbar=()=>{
    return(
        <nav style={{
            backgroundColor:'white',
            display:'flex',
            justifyContent:'space-between',
            padding:'0 10px',
            boxShadow:'0 8px 8px rgba(0,0,0,0.3)'
        }}>
        <div style={{
            display:'flex',
            alignItems:'center',
            gap:'20px',
        }}>
            <img src="./Images/SchoolLogo.jpeg" width='80' style={{
                borderRadius:'10px',
            }} />
            <h3>Budha Giri Bidya Pitha</h3>
        </div>
            <ul style={{
                listStyle:'none',
                display:'flex',
                padding:0,
                margin:0 
                     }}>

                <li style={{
                    display:'flex',
                    alignItems:'center',
                    padding:32,
                }}>
                <a href="#" style={{
                    textDecoration:'none',
                    color:'#323232',
                    fontSize:'20px',
                }}>Home</a>
                </li>

                <li style={{
                    display:'flex',
                    alignItems:'center',
                    padding:32,
                }}>
                <a href="#" style={{
                    textDecoration:'none',
                    color:'#323232',
                    fontSize:'20px',
                }}>About Us</a>
                </li>

                <li style={{
                    display:'flex',
                    alignItems:'center',
                    padding:32,
                }}>
                <a href="#" style={{
                    textDecoration:'none',
                    color:'#323232',
                    fontSize:'20px',
                    
                }}>Course</a>
                </li>

                <li style={{
                    display:'flex',
                    alignItems:'center',
                    padding:32,
                }}>
                <a href="#" style={{
                    textDecoration:'none',
                    color:'#323232',
                    fontSize:'20px',
                }}>Fee</a>
                </li>

                <li style={{
                    display:'flex',
                    alignItems:'center',
                    padding:32,
                }}>
                <a href="#" style={{
                    textDecoration:'none',
                    color:'white',
                    fontSize:'20px',
                    background:'purple',
                    padding:'10px',
                    borderRadius:10,
                }}>Contact Us</a>
                </li>
                
            
            </ul>
            
           
            
    </nav>
    )

}
export default Navbar;