/* import ChildB from "./ChildB";
const ChildA= ({name})=>{

    return(
        <div>
            <h2>
            Hi i am ChildA Component and my name is {name} 
        </h2>
        <h3><ChildB name={name}/></h3>
        </div>
        
    )
}
export default ChildA; */
//.....................................................................

import ChildB from "./ChildB";
const ChildA= ()=>{

    return(
        <div>
        <h3><ChildB /></h3>
        </div>
        
    )
}
export default ChildA;