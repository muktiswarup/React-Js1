/* import ChildC from './ChildC'
const ChildB= ({name})=>{

    return(
        <div>
            <h3>Hi i am ChildB and my name is {name} </h3>
            <ChildC name={name}/>
        </div>
    )
}
export default ChildB; */
//...............................................................................



import ChildC from './ChildC'
const ChildB= ()=>{

    return(
        <div>
        
            <ChildC />
        </div>
    )
}
export default ChildB; 