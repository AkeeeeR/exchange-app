import React from 'react';
import { Navbar, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import classnames from 'classnames';
import '../css/navbar.min.css';

export default class MyNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false,
            activeItemPills: '1'
        };
    this.togglePills = this.togglePills.bind(this);
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    togglePills(id) {
        if (this.state.activePills !== id) {
          this.setState({
            activeItemPills: id
          });
        }
      }

    render() {
        return (
            <div>
            <Router>
                <Navbar color="indigo" dark expand="md" fixed="top" scrolling>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                            <NavItem active>
                                <NavLink to="#" className={classnames("home",{active: this.state.activeItemPills === '1'})} onClick={()=> { this.togglePills('1'); }}>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#" className={classnames({active: this.state.activeItemPills === '2'})} onClick={()=> { this.togglePills('2'); }}>Shares</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#" className={classnames({active: this.state.activeItemPills === '3'})} onClick={()=> { this.togglePills('3'); }}>Wallet</NavLink>
                            </NavItem>
                            </NavbarNav>
                            <NavbarNav right>
                            <NavItem>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle nav caret> <div className="d-none d-md-inline"><Fa icon="user" className="d-inline-inline"/> Profile</div></DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href="#!">Sign in</DropdownItem>
                                    <DropdownItem href="#!">Sign up</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
            <div activeItem={this.state.activeItemPills}>
                <div id="1"></div>
                <div id="2"></div>
                <div id="3"></div>
                <div id="4"></div>
            </div>
        </div>
        );
    }
}