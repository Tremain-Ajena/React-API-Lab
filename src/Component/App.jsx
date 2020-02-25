import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            // filmography: []
        };
    }
    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(obj => {
                console.log(obj)
                this.setState({
                    isLoaded: false,
                    peopleLoaded: false,
                    items: obj,
                    people: obj,
                })
            })
            .catch(error => console.log('Did not find information.', error))
    }

    handleClick() {
        this.setState({isLoaded: true})
        this.setState({peopleLoaded:false})
    }
    handleClick2() {
        this.setState({peopleLoaded: true})
        this.setState({isLoaded: false})
    }

    render() {
        const { isLoaded, peopleLoaded, items } = this.state;
        if(!isLoaded | !peopleLoaded){
            return (
                <div>
                    <div>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSk6iXkGyO4uiJv2n5FpGhwJVA7YIBYXi02E5lhQY1ITcAY8Kay' className="card-img" alt="Studio Ghibli" style={{ maxWidth: '540px' }} />
                    </div>
                    <button className="btn btn-outline-info" id='post-btn' onClick={() => this.handleClick()}>Load Filmography</button>
                    <button className="btn btn-outline-info mx-4" id='post-btn2' onClick={() => this.handleClick2()}>Load People</button>

                </div>
            )
        } else {
            if (isLoaded) {

                return (
                    <div>
                        
                        {items.map(item => (
    
                                <React.Fragment key={item.id}>
                                    <div className="card mb-3 text-white bg-secondary" style={{ maxWidth: '540px' }}>
                                        <div className="row no-gutters">
                                            <div className="col-md-4">
                                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSk6iXkGyO4uiJv2n5FpGhwJVA7YIBYXi02E5lhQY1ITcAY8Kay' className="card-img" alt="Studio Ghibli" />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-header">
                                                    <h5 className="card-title">{item.title}</h5>
                                                </div>
                                                <div className="card-body">
                                                    <p className="card-text">{item.description}</p>
                                                    <p className="card-text"><small className="">{item.director}</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))};
                        
                    </div>
                )
            }
            if (peopleLoaded) {
                return (
                    <div>
                        
                        {items.map(item => (
    
                                <React.Fragment key={item.id}>
                                    <div className="card mb-3 text-white bg-secondary" style={{ maxWidth: '540px' }}>
                                        <div className="row no-gutters">
                                            <div className="col-md-4">
                                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSk6iXkGyO4uiJv2n5FpGhwJVA7YIBYXi02E5lhQY1ITcAY8Kay' className="card-img" alt="Studio Ghibli" />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-header">
                                                    <h5 className="card-title">{item.title}</h5>
                                                </div>
                                                <div className="card-body">
                                                    <p className="card-text">{item.people}</p>
                                                    <p className="card-text"><small className="">{item.director}</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))};
                        
                    </div>
                )
            }
        }
    }
}
export default App