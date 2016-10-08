import React, { Component, PropTypes } from 'react';
import history from '../../core/history';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import ActionFace from 'material-ui/svg-icons/action/face';
import ActionFingerprint from 'material-ui/svg-icons/action/fingerprint';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import Link from '../Link';

export default class Appbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <AppBar
        title="Silicon Magi"
        iconElementRight={
           <Avatar
             src='http://cdn.rawgit.com/siliconmagi/pictures/master/atar.svg'
        />}
        onLeftIconButtonTouchTap={this.handleToggle}
        style={{
        position: 'fixed'
          }}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}
          containerElement={<Link to="/" />}
          primaryText="Home"
          leftIcon={
             <ActionHome />}
          />
          <MenuItem onTouchTap={this.handleClose}
          containerElement={<Link to="/about" />}
          primaryText="About"
          leftIcon={
             <ActionAssignment />}
          />
          <MenuItem onTouchTap={this.handleClose}
          containerElement={<Link to="/contact" />}
          primaryText="Contact"
          leftIcon={
             <ActionFace />}
          />
          <MenuItem onTouchTap={this.handleClose}
          containerElement={<Link to="/login" />}
          primaryText="Login"
          leftIcon={
             <ActionFingerprint />}
          />
          <MenuItem onTouchTap={this.handleClose}
          containerElement={<Link to="/register" />}
          primaryText="Register"
          leftIcon={
             <ActionSettings />}
          />
        </Drawer>
      </div>
    );
  }
}
