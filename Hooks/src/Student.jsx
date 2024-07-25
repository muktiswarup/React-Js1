import PropTypes from 'prop-types'
const Student=(props)=>{
return(
    <div>
        <h2>Name: {props.name}</h2>
        <h2>Age: {props.age}</h2>
        <h2>Student: {props.isStudent?'yes':'no'}</h2><hr />
    </div>
)

}

Student.propTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    Student: PropTypes.bool
}
export default Student;