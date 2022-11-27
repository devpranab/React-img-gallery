import React, { Component } from 'react';
import axios from 'axios';
import PixelImgs from './PixelImgs';

class Search extends Component {
    state = {
      keyword: "",
      photos: [],
      loader: false
    }
    inputHandle = e => {
        this.setState({keyword: e.target.value})
    }
    searchImages = async e => {
        e.preventDefault();
        this.setState({loader: true});
        const res = await axios.get(`https://api.pexels.com/v1/search?query=${this.state.keyword}&per_page=15&page=1`, {headers: {Authorization: "563492ad6f917000010000012d84f734dd0d498c9cf25676e9d61e7f"}});
    this.setState({loader: false});
    this.setState({photos: res.data.photos});
    console.log(this.state.photos); 
    }
    render(){
        return (
            <div>
                <h2>Images Gallery</h2>
                <form onSubmit={this.searchImages}>
            <div className='form-group'>
                <input type="text" name='keywords' className='form-control p-2' value={this.state.value} onChange={this.inputHandle} placeholder='Search image'/>
            </div>
            <br />
            <div className='form-group'>
                <input type="submit" name='keywords' className='btn btn-primary btn-block' value='Search Img'/>
            </div>
            <br />
            </form>
            <div className="row">
            {!this.state.loader ? (
               this.state.photos.map(img => (
                <PixelImgs img={img} key={img.id}/>
               ))
            ): <h1>Loading...</h1>}
            </div>
         </div>
        );
    }
};

export default Search;