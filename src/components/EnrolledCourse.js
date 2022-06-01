import 'antd/dist/antd.css';
import PurchasedCard from './purchasedCart';
import { Tabs } from 'antd';
const { TabPane } = Tabs;






function EnrolledCourse({purchased}){
    function callback(key) {
        console.log(key);
      }
    return(
        <div>
                <h1>
                    Enrolled Course
                </h1>



                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="All Course" key="1">
                    <PurchasedCard purchased={purchased}/>
                    </TabPane>
                    {/* <TabPane tab="Active Course" key="2">
                    Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Completed Course" key="3">
                    Content of Tab Pane 3
                    </TabPane> */}
                </Tabs>
        </div>
    )
}

export default EnrolledCourse;
