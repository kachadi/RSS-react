import { Component } from 'react';
import routes from '../../routes/routes';
import NavItem from './NavItem';
import './Navigation.css'

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul className='nav-list'>
          {routes.map((route) => (
            <NavItem
              key={route.id}
              title={route.title}
              path={route.path}
            ></NavItem>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
