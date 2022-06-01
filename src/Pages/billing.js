import ButtonCustom from "../components/ButtonCustom";
import { KeyboardArrowDown,VerifiedUser} from "@mui/icons-material";
import qr from "../images/qr.svg";
import Location from "../components/Location";
const Billing=()=>{
  return(
      <div className="billing">
         <Location path="Payment"/>
         <div>
         </div>
         <div className="billingmaincontainer">
            <div className="billingcontainer">
            <h3>Fill the Payment Form</h3>
            <fieldset>
                     <legend>Payment Mode</legend>
                    <input/>
            </fieldset>
            <fieldset>
                     <legend>Enter Amount</legend>
                    <input/>
            </fieldset>
            <ButtonCustom text="Pay Now" background="#6A2F85" color="#fff" border="" margint="" marginl="" width="300px"/>
            <h6><VerifiedUser/>Safe and Secure Payments</h6>
            </div>

            <div className="qrcontainer">
             <img src={qr}/>
             <p>For Admission Fee Payment Scan the QR Code</p>
             <a href="">Full Screen Popup</a>
            </div>
         </div>
      </div>
  )
}

export default Billing;