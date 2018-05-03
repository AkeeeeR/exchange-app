import React from 'react';
import {Form, FormControl, FormGroup, ControlLabel, Col, Checkbox, Button} from 'react-bootstrap';

export default class SignIn extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleChange = this.handleChange.bind(this);
    
        this.state = {
          value: ''
        };
      }
    
      getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
      }
    
    handleChange(e) {
        this.setState({ value: e.target.value });
    }    
    
    render() {
        return (
            <Form horizontal>
                <h1>Sign in to your account!</h1>
            <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                Email
                </Col>
                <Col sm={12}>
                <FormControl type="email" placeholder="Email" />
                </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword" >
                <Col componentClass={ControlLabel} sm={2}>
                Password
                </Col>
                <Col sm={12}>
                <FormControl type="password" placeholder="Password" />
                </Col>
            </FormGroup>

            <FormGroup>
                <Col smOffset={2} sm={12}>
                <Checkbox>Remember me</Checkbox>
                </Col>
            </FormGroup>

            <FormGroup>
                <Col smOffset={2} sm={12}>
                <Button type="submit">Sign in</Button>
                </Col>
            </FormGroup>
            </Form>
        );
    }
}