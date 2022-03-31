import React, { Component } from "react";

class ModalCalendar extends Component {
  state = {};

  cancelBtn = () => {
    this.props.closeModal();
  };

  changeCurrentData = (type, isDec) => {
    this.props.changeCurrentData(type, isDec);
  };

  saveChanges=()=>{
    this.props.saveChanges()
  }

  render() {
    const { currentData } = this.props;
    return (
      <div className="card">
        <div className="card-body">Add Calendar </div>
        <div className="card-header">
          <div className="row text-center">
            <div className="col-5">
              <h5>Player's calendar</h5>
              <div className="button-group">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    this.changeCurrentData("time", false);
                  }}
                >
                  -
                </button>
                <button className="btn btn-light">
                  {currentData ? currentData.time : 0}
                </button>
                <button
                  className="btn btn-info"
                  onClick={() => {
                    this.changeCurrentData("time", true);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="col-2">
              <img className="img-fluid"
                src="https://www.calendardate.com/images/mecca_ramadan.jpg"
                alt="ramadan.jpg"
              />
            </div>
            <div className="col-5">
              <h5>Changes calendar</h5>
              <div className="button-group">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    this.changeCurrentData("time2", false);
                  }}
                >
                  -
                </button>
                <button className="btn btn-light">
                  {currentData ? currentData.time2 : 0}
                </button>
                <button
                  className="btn btn-info"
                  onClick={() => {
                    this.changeCurrentData("time2", true);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-danger m-2" onClick={this.cancelBtn}>
            Cancel
          </button>
          <button className="btn btn-success m-2" onClick={this.saveChanges}>Change</button>
        </div>
      </div>
    );
  }
}

export default ModalCalendar;
