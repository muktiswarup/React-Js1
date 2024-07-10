import {Link} from 'react-router-dom';
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
                <Link to="/" style={{
                    textDecoration:'none',
                    color:'#323232',
                    fontSize:'20px',
                }}>Home</Link>
                </li>

                <li style={{
                    display:'flex',
                    alignItems:'center',
                    padding:32,
                }}>
                <Link to="/About-us" style={{
                    textDecoration:'none',
                    color:'#323232',
                    fontSize:'20px',
                }}>About Us</Link>
                </li>

                <li style={{
                    display:'flex',
                    alignItems:'center',
                    padding:32,
                }}>
                <Link to="/Course" style={{
                    textDecoration:'none',
                    color:'#323232',
                    fontSize:'20px',
                    
                }}>Course</Link>
                </li>

                <li style={{
                    display:'flex',
                    alignItems:'center',
                    padding:32,
                }}>
                <Link to="/Fee" style={{
                    textDecoration:'none',
                    color:'#323232',
                    fontSize:'20px',
                }}>Fee</Link>
                </li>

                <li style={{
                    display:'flex',
                    alignItems:'center',
                    padding:32,
                }}>
                <Link to="/Contact-us" style={{
                    textDecoration:'none',
                    color:'white',
                    fontSize:'20px',
                    background:'purple',
                    padding:'10px',
                    borderRadius:10,
                }}>Contact Us</Link>
                </li>
                
            
            </ul>
            
           
            
    </nav>
    )

}
export default Navbar;