import React from 'react'
import { Switch, Route } from "react-router-dom";
import Overview from './component/ComponentOverview'
import EvenLog from './component/ComponentEvenLog'
import AlarmLog from './component/ComponentAlarmLog'
import Login from './component/ComponentLoging'
import Trend from './component/ComponentTrend'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/overview" component={Overview} />
            <Route path="/eventlog" component={EvenLog} />
            <Route path="/alarmlog" component={AlarmLog} />
            <Route path="/trend" component={Trend} />
        </Switch>
      </div>
  )
}

export default App


