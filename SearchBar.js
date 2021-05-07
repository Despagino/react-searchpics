import React from 'react';
import './styles.css'

class SearchBar extends React.Component {
    state = { term: '' }


    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <form id="searchForm" className="searchForm" onSubmit={this.onFormSubmit}>
                <div className="ui massive icon input bold">
                    <input type="text" placeholder="Search..." value={this.state.term} onChange={e => this.setState({ term: e.target.value })} />
                    <i className="search icon"></i>

                </div>
            </form>
        )
    }
}



export default SearchBar