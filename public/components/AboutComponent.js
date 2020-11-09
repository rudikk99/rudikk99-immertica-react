import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedEmployee: null                
        };
    }

    onEmployeeSelect(employee) {
        this.setState({selectedEmployee: employee);
    }

    renderSelectedEmployee(employee) {
        if (employee) {
            return (
                <Card>
                    <CardImg top src={employee.image} alt={employee.name} />
                    <CardBody>
                        <CardTitle>{employee.name}</CardTitle>
                        <CardTitle>{employee.title}</CardTitle>
                        <CardText>{employee.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
    }

    render() {
        const about = this.state.employees.map(employee => {
            return (
                <div key={employee.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onEmployeeSelect(employee)}>
                        <CardImg width="100%" src={employee.image} alt={employee.name} />
                        <CardImgOverlay>
                            <CardTitle>{employee.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {about}
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedEmployee(this.state.selectedEmployee)}
                    </div>
                </div>
            </div>
        );
    }
}
export default About;