import React, { Component } from "react";
import ModalCalendar from "./components/ModalCalendar";

class App extends Component {
  state = {
    calendar: [],
    modalVisibility: false,
    currentData:""
  };

  componentDidMount() {
    const calendar = [
      {
        today: 2,
        day: "April",
        firstName: "Saturday",
        time: "4:32",
        time2: "19:47",
      },
      {
        today: 3,
        day: "April",
        firstName: "Sunday",
        time: "4:30",
        time2: "19:49",
      },
      {
        today: 4,
        day: "April",
        firstName: "Monday",
        time: "4:27",
        time2: "19:51",
      },
      {
        today: 5,
        day: "April",
        firstName: "Tuesday",
        time: "4:24",
        time2: "19:53",
      },
      {
        today: 6,
        day: "April",
        firstName: "Wednesday",
        time: "4:20",
        time2: "19:55",
      },
      {
        today: 7,
        day: "April",
        firstName: "Thursday",
        time: "4:17",
        time2: "19:56",
      },
      {
        today: 8,
        day: "April",
        firstName: "Friday",
        time: "4:14",
        time2: "19:58",
      },
      {
        today: 9,
        day: "April",
        firstName: "Saturday",
        time: "4:10",
        time2: "20:00",
      },
      {
        today: 10,
        day: "April",
        firstName: "Sunday",
        time: "4:07",
        time2: "20:02",
      },
      {
        today: 11,
        day: "April",
        firstName: "Monday",
        time: "4:04",
        time2: "20:04",
      },
      {
        today: 12,
        firstName: "Tuesday",
        day: "April",
        time: "4:00",
        time2: "20:06",
      },
      {
        today: 13,
        firstName: "Wednesday",
        day: "April",
        time: "3:57",
        time2: "20:07",
      },
      {
        today: 14,
        firstName: "Thursday",
        day: "April",
        time: "3:53",
        time2: "20:09",
      },
      {
        today: 15,
        firstName: "Friday",
        day: "April",
        time: "3:49",
        time2: "20:11",
      },
      {
        today: 16,
        firstName: "Saturday",
        day: "April",
        time: "3:46",
        time2: "20:13",
      },
      {
        today: 17,
        firstName: "Sunday",
        day: "April",
        time: "3:42",
        time2: "20:15",
      },
      {
        today: 18,
        firstName: "Monday",
        day: "April",
        time: "3:38",
        time2: "20:17",
      },
      {
        today: 19,
        firstName: "Tuesday",
        day: "April",
        time: "3:35",
        time2: "20:19",
      },
      {
        today: 20,
        firstName: "Wednesday",
        day: "April",
        time: "3:31",
        time2: "20:20",
      },
      {
        today: 21,
        firstName: "Thursday",
        day: "April",
        time: "3:27",
        time2: "20:22",
      },
      {
        today: 22,
        firstName: "Friday",
        day: "April",
        time: "3:24",
        time2: "20:24",
      },
      {
        today: 23,
        firstName: "Saturday",
        day: "April",
        time: "3:19",
        time2: "20:26",
      },
      {
        today: 24,
        firstName: "Sunday",
        day: "April",
        time: "3:15",
        time2: "20:28",
      },
      {
        today: 25,
        firstName: "Monday",
        day: "April",
        time: "3:11",
        time2: "20:30",
      },
      {
        today: 26,
        firstName: "Tuesday",
        day: "April",
        time: "3:07",
        time2: "20:32",
      },
      {
        today: 27,
        firstName: "Wednesday",
        day: "April",
        time: "3:02",
        time2: "20:33",
      },
      {
        today: 28,
        firstName: "Thursday",
        day: "April",
        time: "2:58",
        time2: "20:35",
      },
      {
        today: 29,
        firstName: "Friday",
        day: "April",
        time: "2:56",
        time2: "20:37",
      },
      {
        today: 30,
        firstName: "Saturday",
        day: "April",
        time: "2:55",
        time2: "20:39",
      },
      {
        today: 1,
        firstName: "Sunday",
        day: "May",
        time: "2:54",
        time2: "20:41",
      },
    ];
    this.setState({
      calendar,
    });
  }

  completedCalendar = (index) => {
    const calendar = this.state.calendar;
    calendar.splice(index, 1);
    this.setState({
      calendar,
    });
  };

  openModal = () => {
    this.setState({
      modalVisibility: true,
    });
  };
  closeModal = () => {
    this.setState({
      modalVisibility: false,
    });
  };

  changeCurrentData=(type, isDec)=>{
    const newCurrentData = this.state.currentData
      ? this.state.currentData
      : {
          today: 0,
          day: "none",
          firstName: "none",
          time: "0",
          time2: "0",
        };


        if(type==="time"){
          if(isDec){
            newCurrentData.time++
          }else if(newCurrentData.time<1){newCurrentData.time2=0}
          else{
            newCurrentData.time--
          }
        }


        if(type==="time2"){
          if(isDec){
            newCurrentData.time2++;
          }else if(newCurrentData.time2<1)
          {newCurrentData.time2=0}
          else{
            newCurrentData.time2--
          }
        }

        this.setState({
          currentData:newCurrentData
        })
  }



  saveChanges=()=>{
    const{calendar, currentData}=this.props
    calendar.push(currentData)
    this.setState={
      calendar,
    }
  }

  render() {
    const { calendar, modalVisibility, currentData } = this.state;
    return (
      <div className="calendar">
        <div className="container">
          <h1 className="info text-center m-3">
            🕌Calendar Ramadan Minsk 2022
          </h1>
          <div className="row">
            <div className="col">
              <button className="btn btn-success m-3" onClick={this.openModal}>
                Add a Day
              </button>
              {modalVisibility ? (
                <ModalCalendar
                  closeModal={this.closeModal}
                  currentData={currentData}
                  changeCurrentData={this.changeCurrentData}
                  saveChanges={this.saveChanges}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <table className="table table-hover">
                <thead className="bg-light text-dark link-light">
                  <tr>
                    <th>Fasting Days</th>
                    <th>Days</th>
                    <th>Week Days</th>
                    <th>Breakfast</th>
                    <th>Iftar</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {calendar.map((item, index) => (
                    <tr>
                      <td>{item.today}</td>
                      <td>{item.day}</td>
                      <td>{item.firstName}</td>
                      <td>{item.time}</td>
                      <td>{item.time2}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => this.completedCalendar(index)}
                        >
                          Completed
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="image">
            <img className="image"
              src="https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D1234673110041369&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fafishakorea%2Fposts%2Froza-tutishogiz-yopish-duosi-va-iftorlik-ogiz-ochish-duosidostlaringizga-ham-ula%2F1234673126708034%2F&tbnid=k0V2itN8E4AkMM&vet=12ahUKEwjQk6WjxPD2AhValf0HHVgKDV0QMygGegUIARDLAQ..i&docid=zR5WmLvkbn5PHM&w=960&h=876&q=og%27iz%20ochish%20duosi&ved=2ahUKEwjQk6WjxPD2AhValf0HHVgKDV0QMygGegUIARDLAQ"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
