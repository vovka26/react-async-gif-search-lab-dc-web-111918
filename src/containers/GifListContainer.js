import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    state = {
        results: []
    }

    fetchGifs = (searchTerm) => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(data => {
            const firstThree = data.data.slice(0, 3)
            this.setState({results: firstThree})
        })
    }

    render(){
        return (
            <div>
                <GifList gifs={this.state.results}/>
                <GifSearch fetchGifs={this.fetchGifs}/>
            </div>
        )
    }
}

export default GifListContainer