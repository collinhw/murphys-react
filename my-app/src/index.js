import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header,Menu, Icon, Dropdown, List } from 'semantic-ui-react';

class Murphys extends React.Component {
  render() {
    return (
        <div>
          <TopMenu/>
          <BackgroundImage/>
          <Footer/>

        </div>
    );
  }
}

class TopMenu extends React.Component{
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <img class="ui image item" src="http://murphyshawaii.com/media/2014/04/murphyshawaii.png"/>
            <Menu.Item fitted position="right"></Menu.Item>
            <Menu.Item fitted >Home</Menu.Item>

            <Dropdown item text="About Us">
              <Dropdown.Menu>
                <Dropdown.Item>Getting Here/Parking</Dropdown.Item>
                <Dropdown.Item>Catering/Private Events</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item fitted>St Patrick's Day</Menu.Item>

            <Dropdown item text="Menu">
              <Dropdown.Menu>
                <Dropdown.Item>Lunch Menu</Dropdown.Item>
                <Dropdown.Item>Dinner Menu</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item fitted>Bar</Menu.Item>
            <Menu.Item fitted><Icon name="search icon" /></Menu.Item>


          </Container>
        </Menu>
    )
  }
}
class BackgroundImage extends React.Component{
  render(){
    return (
        <img class="ui centered image" src="http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png"/>
    )
  }
}
class Footer extends React.Component{
  render(){
    return (
        <Menu borderless className="footer">

        </Menu>
    )
  }
}


  ReactDOM.render(<Murphys/>, document.getElementById('root'));