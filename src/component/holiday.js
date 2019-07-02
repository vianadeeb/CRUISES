import React from "react";
import Component from '@reactions/component';
import { Col, Row, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import './holiday.css'
class Holiday extends React.Component {
    constructor() {
        super();
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
        this.state = {
            logoCover: '',
            departingAirportName: '',
            depDateAndTime: '',
            arrDateAndTime: '',
            arrivalAirportName: '',
            depCityName: '',
            arrCityName: '',
            layOverTime: '',
            layOverMinutes: '',
            layOverCity: '',
            data: [],
            id:'',
            id:[],
             open:false,

        };
    }
    componentDidMount() {
        axios.get(`https://favorite-holiday.herokuapp.com/api/orders/oneway?from=BGW&to=BEY&data=2019-06-24&adt=1&type=e&chd=0&Infant=0`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    data: response.data,
                    //img:response.data.article[0].urlToImage,
                })
            })
            .catch(function (error) {
                console.log(error);

            })
            .then(function () {

            });
    }




    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }
    render() {
        return (
             
            <div id="holiday"  >
                {this.state.data.map((item =>
        
                    <Row style={{ marginRight: 0 }} id="p"  key={item.id}  >
                        <Col xs={3} >
                            <img src={item.airlineLogo[0]} alt="logo" />
                        </Col>
                        <Col xs={3}>
                            <p id="dep">{item.depDateAndTime[0]}</p>
                            <p>{item.departingAirportName}</p>
                        </Col>
                        <Col xs={3}>
                            <p id="tim">{item.layOverTime[0]}</p>
                            <p id="tim">{item.layOverCity[2]}</p>
                        </Col>
                        <Col xs={3}>
                            <p id="dep">{item.arrDateAndTime[0]}</p>
                            <p>{item.arrivalAirportName[0]}</p>
                        </Col>


                        <div id="deq">
                            <Row style={{marginRight:0 }}>
                                <Col>
                                    <div id="diq"></div>
                                </Col>
                            </Row>
                        </div>
                        <div id="fp">
                            <Row style={{marginRight:0 }}>
                                <Col>
                                   
                                        <Button id="det" onClick={this.handleShow}>
                                            Details
                                        </Button>
                                       <Component initialState={{open:false}}>
                                           {/* {({state,setState})} =>( */}
                                           {this.state.data.map((item1 =>
                                               // const {id}=item;
                                            <Modal show={this.state.show} onHide={this.handleClose} id="mod" key={item1.id}>
                                                <Modal.Header closeButton id="city">
                                                    <Modal.Title >From {item1.depCityName[0]} To {item1.arrCityName[0]}</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    {/* <Row style={{ marginRight: 0 }} id="pp" > */}
                                                    <Col xs={6} >
                                                        <img src={item1.airlineLogo[0]} alt="image" />
                                                        <p>{item1.airlineName[0]}</p>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <p id="dep">{item1.depDateAndTime[0]}</p>
                                                        <p>{item1.departingAirportName[0]}</p>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <p>layover Time</p>
                                                        <p>{item1.layOverTime[0]}</p>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <p id="dep">{item1.arrDateAndTime[0]}</p>
                                                        <p>{item1.arrivalAirportName[0]}</p>
                                                    </Col>
                                                    {/* </Row> */}
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Col xs={12}>
                                                        <Button id="buy" variant="primary" onClick={this.handleClose}>
                                                            Buy For 1050.75 TRY
                                          </Button>
                                                    </Col>
                                                </Modal.Footer>
                                            </Modal>
                                             ))}
                                            {/* )  */}
                                            </Component>
                                       
                                    <Button id="vi">Purechase For </Button>
                                    </Col>
                            </Row>
                        </div>

                    </Row>
                        ))}
            </div>
                );
                }
            }
export default Holiday;