import { Component } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  inputValue?: string;
}

interface SearchBarState {
  inputValue: string;
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      inputValue: localStorage.getItem('inputValue') || '' ,
    };
  }

  searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ inputValue: event.target.value });
    console.log(this.state.inputValue);
  };

  searchFormHandler = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };


  componentWillUnmount() {
    console.log('unmounting');
    
    localStorage.setItem('inputValue', this.state.inputValue);
  }

  render() {
    return (
      <form className='search-form' onSubmit={this.searchFormHandler}>
        <div className='form-control'>
          <input
            id='search'
            type='text'
            placeholder='start typing a word'
            className='search-input'
            onChange={this.searchInputHandler}
            value={this.state.inputValue}
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
