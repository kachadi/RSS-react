import { PureComponent } from 'react';
import routes from '../../routes/routes';
import NavItem from './NavItem';
import './Navigation.css';

class Navigation extends PureComponent {
  render() {
    return (
      <nav>
        <ul className="nav-list">
          {routes.map((route) => (
            <NavItem
              key={route.id}
              title={route.title}
              path={route.path}
            />
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
