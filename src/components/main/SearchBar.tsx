import { Component } from 'react';
import './SearchBar.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SearchBarProps {}

interface SearchBarState {
  inputValue: string;
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      inputValue: localStorage.getItem('inputValue') || '',
    };
  }

  componentWillUnmount() {
    const { inputValue } = this.state;
    localStorage.setItem('inputValue', inputValue);
  }

  searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ inputValue: event.target.value });
  };

  // eslint-disable-next-line class-methods-use-this
  searchFormHandler = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  render() {
    const { inputValue } = this.state;

    return (
      <form className='search-form' onSubmit={this.searchFormHandler}>
        <div className='form-control'>
          <input
            id='search'
            type='text'
            placeholder='start typing a word'
            className='search-input'
            onChange={this.searchInputHandler}
            value={inputValue}
          />
        </div>
        <div className='form-action'>
          <button type='submit' className='search-btn'>
            search
          </button>
        </div>
      </form>
    );
  }
}

export default SearchBar;
