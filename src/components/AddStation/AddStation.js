import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import classnames from 'classnames';

import {addStation, getStation, getAllStation} from '../../actions/stationActions';

class AddStation extends Component {

  state = {
    stationNumber: '',
    station: {},
    search: false,
    checkAddStation: false
  };

  componentDidMount() {
    this.props.getAllStation()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.station.checkStation) {
      this.setState({
        stationNumber: Object.keys(nextProps.station.station).length ? this.state.stationNumber : '',
        station: nextProps.station.station,
        search: true
      })
    }
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value, search: false, station: {}})
  }

  onClick() {
    this.props.getStation(this.state.stationNumber);
    this.checkStation()
  }

  checkStation() {
    // this.state.stationNumber
    // this.props.station.stations
    console.log(this.props.station.stations)
    this.props.station.stations.forEach((element) => {
      if (element.serial_number === this.state.stationNumber) {
        this.setState({checkAddStation: true})
      } else {
        this.setState({checkAddStation: false})
      }
    });
  }

  onAddStation() {
    this.props.addStation(this.state.station.serial_number)
  }

  render() {
    return (
      <div className="main">
        <div className="header">
          <div className="bar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <img src={require("../../img/Group.png")} alt=""/>
        </div>
        <div className="content">
          <div className="left_column">
            <h2>Add Charging Station</h2>
            <p>To register your cha
              <div className="img_wrap">
                <img src={require("../../img/Shape.png")} alt=""/>
                <span className="tooltip_h">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, vero.
              </span>
              </div>
            </p>
            <div className={classnames('input_block', {
              'not-valid-input': !Boolean(this.state.stationNumber.length) && this.state.search,
              'valid-input': Boolean(this.state.stationNumber.length) && this.state.search
            })}>
              <input
                type="text"
                name="stationNumber"
                placeholder={!Boolean(this.state.stationNumber.length) && this.state.search ? "Wrong! Try again!" : "e.g 02341932"}
                value={this.state.stationNumber}
                onChange={this.onChange.bind(this)}
              />
              <img
                src={require("../../img/Shape (1).png")}
                alt=""
              />
            </div>
            ccfd4981

            {(!this.state.search || !Object.keys(this.state.station).length) &&
            <button
              className={classnames({
                'not-valid': !Boolean(this.state.stationNumber.length)
              })}
              onClick={this.onClick.bind(this)}
              disabled={!Boolean(this.state.stationNumber.length)}
            >
              NEXT
            </button>
            }

            {(this.state.search && Object.keys(this.state.station).length) ?
              <div className="station_add">
                <img src={require("../../img/Unknown.png")} alt=""/>
                <p>Your сhargе point is</p>
                <button
                  className={classnames({
                    'not-valid': this.state.checkAddStation
                  })}
                  onClick={this.onAddStation.bind(this)}
                  disabled={this.state.checkAddStation}
                >
                  {this.state.checkAddStation ? 'Station added' : 'Add station'}
                </button>
              </div>
              : ''}
          </div>
          <div className="right_column">
            <h2>Your charging statio</h2>
            {this.props.station.stations.map((e, i) => (
              <div
                key={i}
                className="station_card"
              >
                <h4>{e.vendor_name}</h4>
                <img src={require("../../img/Unknown.png")} alt=""/>
                <ul>
                  <li>
                    <h5>Type</h5>
                    <p><img src={require("../../img/Group 18.png")} alt=""/></p>
                  </li>
                  <li>
                    <h5>Current</h5>
                    <p>Ac</p>
                  </li>
                  <li>
                    <h5>Power</h5>
                    <p>22 kw</p>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  station: state.station
});

export default connect(mapStateToProps, {getStation, addStation, getAllStation})(
  AddStation
);