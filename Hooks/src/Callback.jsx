import { memo } from "react";

const Callback= ({Learning})=>{
console.log('hi i am child component..')
    return(
        <>
        <div>
            <h1>Hi i am a Child.</h1>
        </div>
        </>
    )

}
export default memo( Callback);