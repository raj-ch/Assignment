import React, { Component } from 'react';
import './custom-popup-styles.css';

export default class CustomPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Men',
            groups: [
                {
                    "headerGroupId": 1,
                    "headerGroupName": "Men",
                    "selectedCount": 2,
                    "headerGroupValues": [
                        {
                            "headerId": 7,
                            "headerName": "Garment Size",
                            "uniqueIdentifier": "7_GarmentSize",
                            "headerMetadata": [
                                {
                                    "prefId": "757f5882-2b76-11e7-93ae-92361f002671",
                                    "hierarchyId": 1715,
                                    "hierarchyName": "Big & Tall",
                                    "hierarchyAttributeName": "MEN_BIG_TALL_SIZE_T",
                                    "hierarchyValues": [
                                        {
                                            "id": 20031761,
                                            "value": "L, Tall",
                                            "selected": true
                                        },
                                        {
                                            "id": 20024613,
                                            "value": "XL, Big",
                                            "selected": true
                                        },
                                        {
                                            "id": 20024625,
                                            "value": "XL, Tall",
                                            "selected": false
                                        },
                                        {
                                            "id": 20024614,
                                            "value": "2XL, Big",
                                            "selected": false
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "headerGroupId": 2,
                    "headerGroupName": "Women",
                    "selectedCount": 2,
                    "headerGroupValues": [
                        {
                            "headerId": 7,
                            "headerName": "Petite",
                            "uniqueIdentifier": "7_GarmentSize",
                            "headerMetadata": [
                                {
                                    "prefId": "757f5882-2b76-11e7-93ae-92361f002671",
                                    "hierarchyId": 1715,
                                    "hierarchyName": "Women's Regular",
                                    "hierarchyAttributeName": "MEN_BIG_TALL_SIZE_T",
                                    "hierarchyValues": [
                                        {
                                            "id": 20031761,
                                            "value": "1, S",
                                            "selected": true
                                        },
                                        {
                                            "id": 20024613,
                                            "value": "2, S",
                                            "selected": true
                                        },
                                        {
                                            "id": 20024625,
                                            "value": "3, S",
                                            "selected": false
                                        },
                                        {
                                            "id": 20024614,
                                            "value": "4, S",
                                            "selected": false
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "headerGroupId": 3,
                    "headerGroupName": "Kids",
                    "selectedCount": 4,
                    "headerGroupValues": [
                        {
                            "headerId": 7,
                            "headerName": "Shirt & Tops",
                            "uniqueIdentifier": "7_GarmentSize",
                            "headerMetadata": [
                                {
                                    "prefId": "757f5882-2b76-11e7-93ae-92361f002671",
                                    "hierarchyId": 1715,
                                    "hierarchyName": "Kid's Regular",
                                    "hierarchyAttributeName": "MEN_BIG_TALL_SIZE_T",
                                    "hierarchyValues": [
                                        {
                                            "id": 20031761,
                                            "value": "S",
                                            "selected": true
                                        },
                                        {
                                            "id": 20024613,
                                            "value": "M",
                                            "selected": true
                                        },
                                        {
                                            "id": 20024625,
                                            "value": "XS",
                                            "selected": false
                                        },
                                        {
                                            "id": 20024614,
                                            "value": "XXS",
                                            "selected": false
                                        }
                                    ]
                                }
                            ]
                        }, {
                            "headerId": 7,
                            "headerName": "Shirt & Tops",
                            "uniqueIdentifier": "7_GarmentSize",
                            "headerMetadata": [
                                {
                                    "prefId": "757f5882-2b76-11e7-93ae-92361f002671",
                                    "hierarchyId": 1715,
                                    "hierarchyName": "Kid's Regular",
                                    "hierarchyAttributeName": "MEN_BIG_TALL_SIZE_T",
                                    "hierarchyValues": [
                                        {
                                            "id": 20031761,
                                            "value": "S",
                                            "selected": true
                                        },
                                        {
                                            "id": 20024613,
                                            "value": "M",
                                            "selected": true
                                        },
                                        {
                                            "id": 20024625,
                                            "value": "XS",
                                            "selected": false
                                        },
                                        {
                                            "id": 20024614,
                                            "value": "XXS",
                                            "selected": false
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }

    changeTab = (val) => {
        this.setState({ selectedTab: val });
    }

    toggleSize = (grpName, subIndex, id) => {
        this.setState({
            groups: this.state.groups.map(group => {
                if (group.headerGroupName === grpName) {
                    return {
                        ...group, headerGroupValues: group.headerGroupValues.map((subGroup, index) => {
                            if (index === subIndex) {
                                return {
                                    ...subGroup, headerMetadata: subGroup.headerMetadata.map((obj, ind) => {
                                        if (ind === 0) {
                                            return {
                                                ...obj, hierarchyValues: obj.hierarchyValues.map(size => {
                                                    if (size.id === id) {
                                                        size.selected = !size.selected
                                                    }
                                                    return size;
                                                })
                                            }
                                        }
                                        return obj;
                                    })
                                }
                            }
                            return subGroup;
                        })
                    }
                }
                return group;
            })
        })
    }

    toggleAcc = (grpName, subgrpIndex) => {
        this.setState({
            groups: this.state.groups.map(group => {
                if (group.headerGroupName === grpName) {
                    return {
                        ...group, headerGroupValues: group.headerGroupValues.map((subGroup, index) => {
                            if (index === subgrpIndex) {
                                return {
                                    ...subGroup, headerMetadata: subGroup.headerMetadata.map((obj, ind) => {
                                        if (ind === 0) {
                                            return {
                                                ...obj, isExpanded: !obj.isExpanded
                                            }
                                        }
                                        return obj;
                                    })
                                }
                            }
                            return subGroup;
                        })
                    }
                }
                return group;
            })
        })
    }

    countOfSelected = () => {
        let groups = this.state.groups;
        let count = 0;
        groups.forEach(grp => {
            grp.headerGroupValues.forEach(subGrp => {
                subGrp.headerMetadata[0].hierarchyValues.forEach(size => {
                    if(size.selected){
                        count++;
                    }
                })
            });
        });
        return count;
    }

    render() {
        const selectGroud = this.state.groups.filter(group => group.headerGroupName === this.state.selectedTab, [])[0];
        const count = this.countOfSelected();
        return this.props.isPopupOpen ? <div className="model-overlay">
            <div className="model-container">
                <div className="model-header">
                    <div><h1>Edit My Sizes({count})</h1></div>
                    <div><input type="button" value="X" onClick={() => this.props.closeModal()}/></div>
                </div>
                <div className="model-content">
                    <div className="custom-tabs">
                        {
                            this.state.groups.map(group => {
                                return (
                                    <div
                                        className={`${group.headerGroupName === this.state.selectedTab ? 'tab active' : 'tab'}`}
                                        onClick={() => this.changeTab(group.headerGroupName)}
                                    >{group.headerGroupName}
                                    </div>);
                            })
                        }
                    </div>
                    <div className="garment-size">
                        <h2>Garment Size</h2>
                        {
                            selectGroud.headerGroupValues.map((subGroup, index) => {
                                return (
                                    <div className="accrodian-container">
                                        <div className="acc-header" onClick={() => this.toggleAcc(selectGroud.headerGroupName, index)}>
                                            <div> {subGroup.headerMetadata[0].hierarchyName} </div>
                                            <div className="head-icon" > {subGroup.headerMetadata[0].isExpanded ? '-' : '+'} </div>
                                        </div>
                                        <div className={`${subGroup.headerMetadata[0].isExpanded ? 'acc-content show' : 'acc-content hide'}`}>
                                            {subGroup.headerMetadata[0].hierarchyValues.map(size =>
                                                <div className={`${size.selected ? 'size selected' : 'size'}`}
                                                    onClick={() => this.toggleSize(selectGroud.headerGroupName, index, size.id)}>{size.value}</div>)
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
                <div className="model-footer">
                    <input type="button" value="Save and Continue" disabled={count === 0} onClick={()=> this.props.closeAndShowPayLoad(this.state.groups)}></input>
                </div>
            </div>
        </div> : null
    }
}