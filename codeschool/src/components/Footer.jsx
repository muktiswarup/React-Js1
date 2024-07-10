import { Link } from "react-router-dom"

const Footer = ()=>{
    return (
        <footer style={{
            background: '#280044',
            padding: '80px 10%',
            display: 'flex'
        }}>
            <div style={{width: '100%'}}>
                <h2 style={{
                    color: 'white', 
                    fontWeight: '600',
                    margin: 0
                }}>Codeschool</h2>
                <p style={{color: 'white'}}>
                    Online learning community school for coder kids powered by CodingOtt
                </p>
            </div>

            <div style={{width: '100%'}}>
                <h2 style={{
                    color: 'white', 
                    fontWeight: '600',
                    margin: 0
                }}>Popular Links</h2>
                <ul style={{
                    padding: 0,
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16
                }}>
                    <li>
                        <Link to="/" style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>Home</Link>
                    </li>

                    <li>
                        <Link to="/teachers" style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>Teachers</Link>
                    </li>

                    <li>
                        <Link to="/holidays" style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>Holidays</Link>
                    </li>

                    <li>
                        <Link to="/contact-us" style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>Contact us</Link>
                    </li>
                </ul>
            </div>

            <div style={{width: '100%'}}>
                <h2 style={{
                    color: 'white', 
                    fontWeight: '600',
                    margin: 0
                }}>Social Profiles</h2>
                <ul style={{
                    padding: 0,
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16
                }}>
                    <li>
                        <Link to="https://www.youtube.com/@codingott" style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>
                            <i className="ri-youtube-line" style={{marginRight: 4}}></i>
                            YouTube
                        </Link>
                    </li>

                    <li>
                        <Link to="https://www.facebook.com/profile.php?id=100089487015758" style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>
                            <i className="ri-messenger-line" style={{marginRight: 4}}></i>
                            Facebook
                        </Link>
                    </li>

                    <li>
                        <Link to="https://www.linkedin.com/in/er-saurav-4318aa21b/" style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>
                            <i className="ri-linkedin-box-line" style={{marginRight: 4}}></i>
                            Linkedin
                        </Link>
                    </li>

                    <li>
                        <Link to="https://www.instagram.com/codingott" style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>
                            <i className="ri-instagram-line" style={{marginRight: 4}}></i>
                            Instagram
                        </Link>
                    </li>
                </ul>
            </div>

            <div style={{width: '100%'}}>
                <h2 style={{
                    color: 'white', 
                    fontWeight: '600',
                    margin: 0
                }}>Contact us</h2>
                <form style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                    marginTop: 18
                }}>
                    <input 
                        required
                        name="fullname"
                        placeholder="Fullname"
                        type="text"
                        style={{
                            border: 'none',
                            padding: 12,
                            borderRadius: 4,
                            width: '100%'
                        }} 
                    />

                    <input 
                        required
                        name="email"
                        placeholder="example@mail.com"
                        type="email"
                        style={{
                            border: 'none',
                            padding: 12,
                            borderRadius: 4,
                            width: '100%'
                        }} 
                    />

                    <textarea
                        required
                        name="message"
                        placeholder="Message"
                        type="text"
                        style={{
                            border: 'none',
                            padding: 12,
                            borderRadius: 4,
                            width: '100%'
                        }} 
                        rows="3"
                    >
                    </textarea>

                    <button style={{
                        border: 'none',
                        padding: '12px 24px',
                        borderRadius: 4,
                        width: 'fit-content',
                        background: '#f38e1e',
                        color: 'white'
                    }}>Submit</button>
                </form>
            </div>
        </footer>
    )
}

export default Footer