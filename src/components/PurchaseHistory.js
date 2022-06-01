
import {useState, useEffect} from "react";
import axios from 'axios';
import LoadingScreen from 'react-loading-screen';
function PurchaseHistory({orderH}){
   
console.log("orderIs",orderH );
    if (!orderH) {
        return (<div><LoadingScreen
           loading={true}
           bgColor='#f1f1f1'
           spinnerColor='#9ee5f8'
           textColor='#676767'
        > </LoadingScreen></div>)
  
     }
    return(
        <div>
                <h1>
                    Purchase History
                </h1>

                <div>
                <table class="table table-striped" style={{width:'80%'}}>
                    <thead>
                        <tr >
                        <th className="table_head" style={{marginLeft:'25px'}} scope="col">S.No</th>
                        <th className="table_head" style={{marginLeft:'25px'}} scope="col">Order Id</th>
                        <th className="table_head" style={{marginLeft:'25px'}} scope="col">Invoice No.</th>
                        <th className="table_head" style={{marginLeft:'25px'}} scope="col">Payment Id</th>
                        <th className="table_head" style={{marginLeft:'25px'}} scope="col">Issues On</th>
                        <th className="table_head" style={{marginLeft:'25px'}} scope="col">Status</th>
                        <th className="table_head" style={{marginLeft:'25px'}} scope="col">Amount</th>
                        <th className="table_head" style={{marginLeft:'25px'}} scope="col">payment</th>
                        </tr>
                    </thead>
                    <tbody style={{marginLeft:'25px'}}>
                        {orderH.orders ? orderH.orders.map((item,index)=>{
                            return(  <tr>
                        <td className="table_entry "  >{index+1}</td>
                        <td className="table_entry"  >{item.order_id}</td>
                        <td className="table_entry"  >{item.invoice_number}</td>
                        <td className="table_entry"  >{item.payment_id}</td>
                        <td className="table_entry"  >{item.issued_on}</td>
                        <td className="table_entry"  >{item.order_status}</td>
                        <td className="table_entry"  >{item.amount}</td>
                        <td className="table_entry"  >{item.method_of_payment}</td>
                        </tr>)
                        })
: <h2>No Course yet !!</h2>}
                    </tbody>
                    </table>
                </div>
        </div>
    )
}

export default PurchaseHistory;