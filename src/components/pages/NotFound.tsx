import { PureComponent } from 'react';
import './NotFound.css';

class NotFound extends PureComponent {
  render() {
    return (
      <div className='not-found_wrapper'>
        <h1>Page not found :(</h1>
      </div>
    );
  }
}

export default NotFound;
