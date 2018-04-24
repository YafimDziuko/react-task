import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../../components/button/button';
import { SearchBar } from '../../components/search-bar/search-bar';
import { Nextflixroulette } from '../../components/nextflixroulette/nextflixroulette'; 
import { EmptyResults } from '../../components/empty-results/empty-results';
import { ResultsBar } from '../../components/results-bar/results-bar';
import { ResultsBody } from '../../components/results-body/results-body';
import { FullFilmItem } from '../../components/full-film-item/full-film-item';
import { Footer } from '../../components/footer/footer';

import './core.scss';
import '../../mixins.scss';

export class Core extends React.Component {
    render() {
        return (
            <div className="core-page">
                <div className="header">
                <Nextflixroulette/>
                    <p className="find-movie">FIND YOUR MOVIE</p>
                    <SearchBar />
                    <div className="button-group cl-white">
                        <div>
                            <p className="search-by">SEARCH BY</p>
                            <Button class='btn genre-button bg-grey'>GENRE</Button>
                            <Button class='btn title-button bg-red'>TITLE</Button>
                        </div>
                        <Button class='btn search-button bg-red'>SEARCH</Button>
                    </div>
                </div>
                <div className="main">
                    <ResultsBar count={7}/>
                    <FullFilmItem title="FOUR ROOMS" rating={4.7} additional="Oscar movie" year={1992} duration={154} description="Film description"/>
                    <ResultsBody/>
                </div>
                <Footer/>
            </div>
        );
    }
}
