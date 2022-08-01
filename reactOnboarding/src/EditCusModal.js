import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditCusModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'customer',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Id:event.target.Id.value,
                Name:event.target.Name.value,
                Address:event.target.Address.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }
    render(){
        return (
            <div className="container">
                <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit Customer
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="Id">
                                    <Form.Label>cussId</Form.Label>
                                    <Form.Control type="text" 
                                        name="Id" required
                                        disabled
                                        defaultValue={this.props.cusid}
                                    placeholder="Name"/>
                                </Form.Group>
                                <Form.Group controlId="Name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="Name" required 
                                        defaultValue={this.props.cusname}
                                        placeholder="Name"/>
                                </Form.Group>
                                <Form.Group controlId="Address">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" name="Address" required 
                                        defaultValue={this.props.cusaddress}
                                        placeholder="Address"/>
                                </Form.Group>
                                <Form.Group>
                                    <Button variant="primary" type="submit">
                                        Update Customer
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
    
            <Modal.Footer>
                <Button variant="danger" onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>

        </Modal>

    </div>
    )
    }

}