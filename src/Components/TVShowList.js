import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';
import TVShow from './TVShow'

class TVShowList extends Component {

  mapAllShows = () => {
    if (this.props.searchTerm){
      let searchedShows = this.props.shows.filter((show) => show.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
      return searchedShows.map(show => <TVShow show={show} key={show.id} selectShow={this.props.selectShow}/>)
    } else {
      return this.props.shows.map( show => <TVShow show={show} key={show.id} selectShow={this.props.selectShow}/>)
    }
  }

  render() {
    return (
      <div className="TVShowList">
        <Grid>
          {this.mapAllShows()}
        </Grid>
      </div>
    )
  }

}

export default TVShowList;
