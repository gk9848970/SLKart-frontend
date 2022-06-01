import React from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import Review from './Review';
import '../css/main.css'
import CourseContentFree from './CourseContentfree';
const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
  }


function Tabss2({detail,playVideo}){
    return(
        <div className="tabss_main" style={{backgroundColor: 'white'}}>
            <Tabs className="tabss_header" defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Overview" key="1" >
                    <h3>Course Description</h3>
                    <p>
                    {detail.description}
                    </p>
                    <h3>This Includes</h3>
                    <p>
                    {detail.this_includes}
                    </p>
                    <h3>What student will learn</h3>
                    <p>
                    {detail.you_will_learn}
                    </p>
                    
                </TabPane>
                <TabPane tab="Curriculum" key="2">
                    <CourseContentFree content = {detail.content} playVideos={playVideo}/>
                </TabPane>
                <TabPane tab="Review" key="3">
                    <h3>Reviews</h3>

                    <h6>Add Reviews</h6>

                    <Review/>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Tabss2;