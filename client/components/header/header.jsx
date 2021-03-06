import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Nextflixroulette } from '../nextflixroulette/nextflixroulette';
import FullFilmItem from '../full-film-item/full-film-item';

import './header.scss';
import { ACTIONS, SEARCH, SORT } from '../../constants/app-constants';
import { updateInputValue, searchHandler, returnToMainPage, resetInputValue, switchSearch, getMovie } from '../../action-creators';

class Header extends React.Component {

    render() {
        return (
            <div className="header">
            <div className="return-div">
                <Nextflixroulette/>
                { this.props.user.fullItem.isActive && 
                    <button className="btn return-button cl-red bg-white" onClick={()=>this.props.returnToMainPage()}>SEARCH</button> 
                }
            </div>
            { !this.props.user.fullItem.isActive ?
                <div>
                <p className="find-movie">FIND YOUR MOVIE</p>
                <div className="search-wrapper">
                    <input className="search-bar" 
                        placeholder="Let's find your movie" 
                        value={this.props.user.inputValue} 
                        onChange={(event)=>this.props.updateInputValue(event.target.value)}
                        onKeyPress={ (event) => {
                            if (event.key == 'Enter') { 
                                this.props.getMovie(SEARCH[this.props.user.search] || this.props.user.search, SORT[this.props.user.sort], this.props.user.inputValue);
                            }
                        }
                    }
                    >
                    </input>
                    {this.props.user.inputValue === "" ? 
                        <img className="arrow" src={require('../../images/arrow.png')} /> :
                        <img className="cross" src={require('../../images/cross.png')} onClick={()=>this.props.resetInputValue()} />
                    }
                </div>
                <div className="button-group cl-white">
                    <div>
                        <p className="search-by">SEARCH BY</p>
                        <button className={`btn genre-button ${this.props.user.search === "genres" ? "bg-red" : "bg-grey"} cl-white`} onClick={()=>this.props.switchSearch('genres')}>GENRE</button>
                        <button className={`btn title-button ${this.props.user.search === "title" ? "bg-red" : "bg-grey"} cl-white`} onClick={()=>this.props.switchSearch('title')}>TITLE</button>
                    </div>
                    <button className='btn search-button bg-red cl-white' onClick={()=>this.props.getMovie(SEARCH[this.props.user.search] || this.props.user.search, SORT[this.props.user.sort], this.props.user.inputValue)}>SEARCH</button>
                </div>
                </div> :
                <FullFilmItem />
            }
            </div>
        );
    }
}
const mapDispatchToProps = {
    updateInputValue, 
    searchHandler, 
    returnToMainPage, 
    resetInputValue, 
    switchSearch, 
    getMovie
}

const mapStateToProps = (state) => {
    return {
        user: state
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);