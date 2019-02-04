import React, {Component} from 'react'

class GifSearch extends Component {
    state = {searchTerm: ''}

    handleOnChange = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        e.target.reset()
        this.props.fetchGifs(this.state.searchTerm)
    }

    render(){
        return (
            <div>
                <form  onSubmit={this.submitHandler}>
                    <input id='input' onChange={this.handleOnChange}/>
                    <button type='submit' id='submit'>Find GIFs</button>
                </form>
            </div>
        )
    }
}

export default GifSearch