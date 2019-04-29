import React from 'react';
import { getSuggestion } from '../utils';

class SearchForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    userKeywords = React.createRef();

    handleSubmit(event) {
        event.preventDefault();
        const keywords = this.userKeywords.current.value.split(' ').join(',');
        this.props.history.push(`/search/${keywords}`)
    }

    render() {
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <h2>Enter Keyword(s)</h2>
                <input type="text" required placeholder="Keyword" defaultValue={getSuggestion()} ref={this.userKeywords}/>
                <button type="submit">Search</button>
            </form>
        )
    }
}

export default SearchForm;