import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList'


class App extends React.Component {

    state = { images: [] }

    onSearchSubmit = (term) => {
        fetch
            (`https://pixabay.com/api/?key=21498588-9fbaffd0a0ca1b5a94655823e&q=${term}`)
            .then(response => response.json())
            .then(info => {
                this.setState({ images: info.hits })
            });

    }

    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />

            </div>
        )
    }
}

export default App