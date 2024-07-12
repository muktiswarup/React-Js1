import Nav from './Nav'
import Footer from './Footer'

const teachers = [
    {
        image: './teachers/a.jpg',
        name: 'Rahul Singh',
        qua: 'MCA (Indian University)'
    },
    {
        image: './teachers/c.jpg',
        name: 'Aishawarya Ray',
        qua: 'MCA (Indian University)'
    },
    {
        image: './teachers/b.jpg',
        name: 'Sonu Kumar Singh',
        qua: 'BCA (Indian University)'
    },
    {
        image: './teachers/d.jpg',
        name: 'Priya Roy',
        qua: 'B.Tech (Indian University)'
    },
    {
        image: './teachers/e.jpg',
        name: 'Rahul Singh',
        qua: 'MCA (Indian University)'
    },
    {
        image: './teachers/f.jpg',
        name: 'Saurav Kumar',
        qua: 'MCA (Indian University)'
    },
    {
        image: './teachers/g.jpg',
        name: 'Sonu Kumar Singh',
        qua: 'BCA (Indian University)'
    },
    {
        image: './teachers/h.jpg',
        name: 'Amitabh Roy',
        qua: 'B.Tech (Indian University)'
    },
    {
        image: './teachers/i.jpg',
        name: 'Rahul Singh',
        qua: 'MCA (Indian University)'
    },
    {
        image: './teachers/j.jpg',
        name: 'Saurav Kumar',
        qua: 'MCA (Indian University)'
    },
    {
        image: './teachers/k.jpg',
        name: 'Sonu Kumar Singh',
        qua: 'BCA (Indian University)'
    },
    {
        image: './teachers/l.jpg',
        name: 'Anubhab Roy',
        qua: 'B.Tech (Indian University)'
    }
]

const Teachers = ()=>{
    return (
        <div>
            <Nav />
            <div>
                <header style={{
                    height: 280,
                    backgroundImage: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(100,43,115,1) 0%, rgba(4,0,4,1) 90% )',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <h1 style={{
                        fontSize: 60,
                        color: 'white'
                    }}>
                        <i className="ri-user-voice-line" style={{marginRight: 16}}></i>
                        Teachers
                    </h1>
                </header>

                <section style={{
                    width: '80%',
                    margin: '0 auto',
                    padding: '80px 0',
                    display: 'flex',
                    columnGap: '5%',
                    rowGap: 48,
                    flexWrap: 'wrap'
                }}>
                   {
                    teachers.map(function(teacher, index) {
                        return (
                            <div style={{width: '20%'}} key={index}>
                                <img src={teacher.image} width="100%" alt={teacher.image} />
                                <h2 style={{padding: 0,marginBottom: 4}}>{teacher.name}</h2>
                                <p style={{padding: 0, margin: 0, color: 'gray'}}>{teacher.qua}</p>
                            </div>
                        )
                    })
                   }
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Teachers