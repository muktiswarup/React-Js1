import Navbar from './Navbar';
import Footer from "./Footer";
const Fee=()=>{
    return(
        <div>
            <Navbar/>
            <table border='black'>
  <tr>
    <th>Course</th>
    <th>Duration</th>
    <th>Fee</th>
  </tr>
  <tr>
    <td>10TH</td>
    <td>12 month</td>
    <td>10000</td>
  </tr>
  <tr>
    <td>9th</td>
    <td>10 months</td>
    <td>90000</td>
  </tr>
  <tr>
    <td>8th</td>
    <td>10 months</td>
    <td>80000</td>
  </tr>

</table>

<Footer/>
        </div>
      
    )
}
export default Fee;