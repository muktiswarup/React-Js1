const Nav=()=>{
return(
    <div>
        <nav style={{
           width:"100%",
           backgroundColor:'grey',
           padding:'10px',
        }}>
            <ul style={{
                 padding: 0,
                 margin: 0,
                 display: 'flex',
                 justifyContent: 'space-around',
                 listStyle: 'none'
            }}>

                <li>
                    <a href="#" style={{
                        textDecoration:'none',
                        color:"maroon",
                    }}>Home</a>
                </li>
                <li>
                    <a href="#" style={{
                        textDecoration:'none',
                        color:"maroon",
                    }}>Skill</a>
                </li>
                <li>
                    <a href="#" style={{
                        textDecoration:'none',
                        color:"maroon",
                    }}>Education</a>
                </li>
                <li>
                    <a href="#" style={{
                        textDecoration:'none',
                        color:"maroon",
                    }}>Contact</a>
                </li>
            </ul>
        </nav>
        <section style={{
            marginTop: '40px',
            backgroundColor: 'purple',
            color:'white',
            padding: '50px 0px'
        }}>
        Hi there! I'm an MCA student, which means I'm pursuing a Master's in Computer Applications. This program is all about deepening my knowledge of computers and software development.

Here's how you can expand on this intro depending on the situation:

In class: Briefly mention your background (e.g., BCA graduate, work experience). You can add a specific area of interest within MCA (e.g., web development, data analytics).
At a networking event: Highlight a technical skill you're good at (e.g., Java, Python) and a project you're proud of (e.g., building a mobile app).
In an interview: Express your enthusiasm for the field and your career goals (e.g., becoming a software developer, pursuing research).
Here are some additional things you can mention:

Your favorite aspects of the program: Problem-solving, teamwork, or the challenge of learning new technologies.
Your dream job: Software developer, data analyst, or a role in a specific industry (e.g., gaming, healthcare).
Remember to tailor your introduction to the audience and make it engaging!
        </section>
        
    </div>
)
}
export default Nav;