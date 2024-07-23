/* const ChildC= ({name})=>{


    return(

        <div>
            <h4>
                Hi i am ChildC and my name is also {name}
            </h4>
        </div>
    )
}
export default ChildC; */

//................................................................................
import { DataContext,DataContext1 } from "../App";
const ChildC= ()=>{


    return(

        <div>
            <DataContext.Consumer>
                {
                    (name)=>{
                        return(
<DataContext1.Consumer>
    {
        (age)=>{
            return(
                <h1>Hi my name is {name} and my age is {age}</h1>
            )
        }
    }
</DataContext1.Consumer>
                        )
                    }
                }
            </DataContext.Consumer>
        </div>
    )
}
export default ChildC;