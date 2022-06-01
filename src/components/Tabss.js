import React from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import Review from './Review';
import CourseContent from './CourseContent';
const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
  }


function Tabss({detail, ids, playVideo}){
    console.log("data hicsddd",ids);
    return(
        <div className="tabss_main" style={{backgroundColor: 'white'}}>
            <Tabs className="tabss_header" defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Overview" key="1">
                    <h3>Course Description</h3>
                    <p style={{width:'80%'}}>
                    {detail.description}
                    </p>
                    
                </TabPane>
                <TabPane tab="Curriculum" key="2">
                    <CourseContent content = {detail.content} playVideos={playVideo}/>
                </TabPane>
                <TabPane tab="Review" key="3">
                    <h3>Reviews</h3>

                    <h6>Add Reviews</h6>

                    <Review idss={ids} />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Tabss;