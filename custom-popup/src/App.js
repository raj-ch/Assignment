import React, { Component } from 'react';
import CustomPopup from './components/custom-popup-component';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isPopupOpen: false,
      payload: []
    }
  }
  buttonClick = () => {
    this.setState({isPopupOpen: true});
  }
  closeModal = () => {
    this.setState({isPopupOpen: false})
  }
  closeAndShowPayLoad = (data) => {
      let payload = [];
        data.forEach(grp => {
            grp.headerGroupValues.forEach(subGrp => {
                let sizes = [];
                payload.push({
                  headerName: subGrp.headerMetadata[0].hierarchyName,
                  sizes: sizes
                });
                subGrp.headerMetadata[0].hierarchyValues.forEach(size => {
                    if(size.selected){
                        sizes.push({"value": size.value,
                        "selected": true});
                    }
                })
            });
        });
       this.setState({payload: payload, isPopupOpen: false});
  }
  render() {
    return (
      <>
        <div className="App">
          <input type="button" onClick={(e) => this.buttonClick(e)} value="Open PopUp"></input>
        </div>
        {this.state.payload && this.state.payload.length ? <div><hr></hr>{JSON.stringify(this.state.payload)}</div> : null}
        <CustomPopup isPopupOpen={this.state.isPopupOpen} closeModal={this.closeModal}  closeAndShowPayLoad={this.closeAndShowPayLoad}></CustomPopup>
      </>
    );
  }
}

export default App;
