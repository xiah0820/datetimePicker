import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message } from 'antd';
import moment from 'moment';

// It's recommended to set locale in entry file globaly.
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

// to get the timestamp
var endDate = Math.round(new Date(2017,8,1,0,0,0));

function disabledDate(current) {
  // can not select days before today or after 2017.8.1
  if (!current){
  	return false;
  }
  else{
  	 return current.valueOf() > endDate || current.valueOf() < Date.now();
  }
 
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  handleChange(date) {
    message.info('Selected Date: ' + date.toString());
    this.setState({ date });
  }
  render() {
    return (
      <div style={{ width: 400, margin: '100px auto' }}>
        <div style={{ marginBottom: '10px' }}>Please choose a date.</div>
        <DatePicker disabledDate={disabledDate}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));