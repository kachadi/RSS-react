import { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import './NavItem.css';

interface NavItemProps {
  title: string;
  path: string;
}

class NavItem extends PureComponent<NavItemProps> {
  render() {
    const { title, path } = this.props;
    return (
      <li>
        <NavLink
          to={path}
          className={({ isActive }) => (isActive ? 'nav-link_active' : 'nav-link')}
        >
          {title}
        </NavLink>
      </li>
    );
  }
}

export default NavItem;
