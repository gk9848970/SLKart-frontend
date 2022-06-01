import Camera from '../images/camera.png';
import InputCustom from '../components/inputCustom';
import { KeyboardArrowDown,CalendarTodayOutlined } from "@mui/icons-material";
import ButtonCustom from '../components/ButtonCustom';
import Location from '../components/Location';
import Footer from "../components/Footer";
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import Profile from '../components/Profile';
import ResetPass from '../components/ResetPass';

const { TabPane } = Tabs;
function callback(key) {
   console.log(key);
 }


const UserProfile=()=>{

   
    return(
            <div>
                  <h1>Settings</h1>
                  <div>
                     <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="Profile" key="1">
                           <Profile/>
                        </TabPane>
                        {/* <TabPane tab="Reset Password" key="2">
                           <ResetPass/>
                        </TabPane> */}
                     </Tabs>
                  </div>

            </div>






      //   <div className='userProfile'>
      //      <div><h2>User Profile</h2></div>
      //      <div ><img  className='camera' src={Camera} alt="" />
      //      </div>
      //      <div className='field'>
      //        <div><InputCustom place='First Name'/></div>
      //        <div><InputCustom place='Last Name'/></div>
      //        <div><InputCustom place='Email Name'/></div>
      //      </div>

      //      <div className='field'>
      //         <div><InputCustom place='Gender' icon={<KeyboardArrowDown/>} /></div>
      //         <div><InputCustom place='Date of Birth' icon={<CalendarTodayOutlined/>} /></div>
      //         <div><InputCustom place='College ID'  /></div>
      //      </div>

      //      <div className='field'>
      //         <div><InputCustom place='Institute Name'/></div>
      //         <div><InputCustom place='Password'/></div>
      //         <div><InputCustom place='Confirm Password'/></div>
      //      </div>
           
      //      <div className='field'>
      //         <div><InputCustom place='Contact' icon={<KeyboardArrowDown/>} /></div>
      //         <div><InputCustom place='Country' icon={<KeyboardArrowDown/>} /></div>
      //         <div><InputCustom place='State'  icon={<KeyboardArrowDown/>}/></div>
      //      </div>
           
      //      <div className='field'>
      //         <div><InputCustom place='City' icon={<KeyboardArrowDown/>}/></div>
      //         <div><InputCustom place='Address'  /></div>
      //         <div><InputCustom place='Postal Code'/></div>
      //      </div>

      //      <div className='buttons'>
      //         <ButtonCustom text="save" className='save' background='#9933C8' color='#fff' border="#fff" />
      //         <ButtonCustom text="cancel" className='cancel' background="#fff" border="#9933C8" margint="0px" marginl="20px"/>
      //      </div>
      //   </div>
    )
}

export default UserProfile;