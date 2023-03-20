import { PureComponent } from 'react';
import Navigation from './Navigation';
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <header>
        <div className='wrapper header_wrapper'>
          <Navigation />
        </div>
      </header>
    );
  }
}

export default Header;
