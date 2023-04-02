import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.css';

interface NavItemProps {
  title: string;
  path: string;
}

function NavItem(props: NavItemProps) {
  const { title, path } = props;
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? `${styles.navLinkActive}` : `${styles.navLink}`)}
      >
        {title}
      </NavLink>
    </li>
  );
}

export default NavItem;
