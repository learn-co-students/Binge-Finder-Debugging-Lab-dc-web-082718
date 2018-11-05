import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';
import TVShow from './TVShow'

class TVShowList extends Component {

  mapAllShows = () => {
    if (this.props.searchTerm){
      return this.searchShows()
    } else {
      return this.filteredShows()
    }
  }

  filteredShows = () => {
    return this.props.shows.map((s) => {
      return this.returnShow(s)
    })
  }

  searchShows = () => {
    return this.props.shows.map((s) => {
      if (s.name.toLowerCase().includes(this.props.searchTerm)){
        return this.returnShow(s)
      }
    })
  }

  returnShow(data) {
    return (
      <TVShow
        show={data}
        key={data.id}
        selectShow={this.props.selectShow}
        image={data.image}
        id={data.id}
      />
    )
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
