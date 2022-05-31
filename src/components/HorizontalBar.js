import CourseContent from "./CourseContent";
import { Link,Switch,Route } from "react-router-dom";
import Overview from "./Overview";


const HorizontalBar=()=>{
    return(
        <div>
        <div className="horizontalbar" >
         <Link to="/course/overview"><butto>Overview</butto></Link>
         <Link to="/course/curriculum"><button>Curriculum</button></Link>
         <Link to="/course/review"><button>Review</button></Link>
        </div>
          <Switch>
             <Route path="/course/overview" component={Overview}></Route>
             <Route path="/course/curriculum" component={CourseContent}></Route>
             <Route exact path="/course/" component={CourseContent}></Route>
             <Route path="/course/review" ></Route>
          </Switch>
        </div>
    )
}

export default HorizontalBar;