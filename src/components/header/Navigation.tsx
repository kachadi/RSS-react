import routes from '../../routes/routes';
import NavItem from './NavItem';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav>
      <ul className={styles.navList}>
        {routes.map((route) => (
          <NavItem key={route.id} title={route.title} path={route.path} />
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
