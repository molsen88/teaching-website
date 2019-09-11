import React from 'react';
import { Link } from 'react-router-dom';
// import Header from './components/Header'


class BookList extends React.Component {
    constructor( props ) {
        super( props );
        this.state = { items: [], text: '' };
        this.handleChange = this.handleChange.bind( this );
        this.handleSubmit = this.handleSubmit.bind( this );
    }

    render() {
        // <Header />
        return (
            <div>
                <h3>BOOKLIST</h3>
                <Books items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-book">
                        What books do you recommend?
          </label>
                    <input
                        id="new-book"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button className='book-button'>
                        Add your favorite book
          </button>
                </form>
            </div>
        );
    }

    handleChange( e ) {
        this.setState( { text: e.target.value } );
    }

    handleSubmit( e ) {
        e.preventDefault();
        if ( !this.state.text.length ) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState( state => ( {
            items: state.items.concat( newItem ),
            text: ''
        } ) );
    }
}

class Books extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map( item => (
                    <li key={item.id}>{item.text}</li>
                ) )}
            </ul>
        );
    }
}

export default BookList