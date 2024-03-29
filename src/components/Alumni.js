import React, { Component } from 'react';

import alumdata from './AlumniData';

export default class Alumni extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: alumdata
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const { collections } = this.state;

        return (
            <div>

                <section className="team-section">
                    <h2 className="h1-responsive text-center my-5" style={{ letterSpacing: '2px' }}>NEUROFOG LAB'S FORMER MEMBERS</h2>

                    <div className="row text-center border text-md-left ml-3 mb-3 text-center justify-content-center z-depth-1 shadow" style={{ width: '95%' }}>


                        <nav class="navbar col-xl-12 z-depth-1 shadow justify-content-center bg-primary text-white ">
                            <h4 className="h1-responsive font-weight-bold  " style={{ letterSpacing: '2px' }}>FORMER LAB MANAGERS</h4>
                        </nav>
                        {
                            collections.Managers.map((item) => {
                                return (
                                    <div id="team-card" className="col-xl-6 col-md-12 col-sm-12 col-lg-12 pt-5 mb-5 d-md-flex justify-content-center" >
                                    <div className="img-responsive mb-4 mr-4 team" style={{ width: item.width || '100%', height: item.height }}>
                                        <img id="image" src={require(`./img/${item.image}.jpg`)} className="rounded img-responsive z-depth-1 shadow" style={{ width: item.width2 || '100%', height: '100%' }} alt="avatar" />
                                    </div>

                                    <div className="col-md-6" style={{ width: item.width3 }}>
                                        <h4 className="font-weight-bold mb-3">{item.name}</h4>
                                        <h6 className="font-weight-bold grey-text mb-3">{item.role}</h6>
                                        <p className="grey-text">{item.description}</p>
                                    </div>
                                    </div>

                                )
                            })
                        }
                    </div>


                    <div className="row text-center border text-md-left ml-3 mb-3 text-center justify-content-center z-depth-1 shadow" style={{ width: '95%' }}>


                        <nav class="navbar col-xl-12 z-depth-1 shadow justify-content-center bg-primary text-white ">
                            <h4 className="h1-responsive font-weight-bold" style={{ letterSpacing: '2px' }}>FORMER PHD STUDENTS</h4>
                        </nav>
                        {
                            collections.Phd.map((item) => {
                                return (
                                    <div id="team-card" className="col-xl-6 col-md-12 col-sm-12 col-lg-12 pt-5 mb-5 d-md-flex justify-content-center" >
                                        <div className="img-responsive mb-4 mr-4 team" style={{ width: item.width || '100%', height: item.height }}>
                                            <img id="image" src={require(`./img/${item.image}.jpg`)} className="rounded img-responsive z-depth-1 shadow" style={{ width: item.width2 || '100%', height: '100%' }} alt="avatar" />
                                        </div>

                                        <div className="col-md-6" style={{  width: item.width3 }}>
                                            <h4 className="font-weight-bold mb-3">{item.name}</h4>
                                            <h6 className="font-weight-bold grey-text mb-3">{item.role}</h6>
                                            <p className="grey-text">{item.description}</p>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>

                    <div className="row text-center border text-md-left ml-3 mb-3 text-center justify-content-start z-depth-1 shadow" style={{ width: '95%' }}>


                        <nav class="navbar col-xl-12 z-depth-1 shadow justify-content-center bg-primary text-white ">
                            <h4 className="h1-responsive font-weight-bold" style={{ letterSpacing: '2px' }}>FORMER HONORS STUDENTS</h4>
                        </nav>
                        {
                            collections.Honors.map((item) => {
                                return (
                                    <div id="team-card" className="col-xl-6 col-md-12 col-sm-12 col-lg-12 pt-5 mb-5 d-md-flex justify-content-center" >
                                        <div className="img-responsive mb-4 mr-4 team" style={{ width: item.width || '100%', height: item.height }}>
                                            <img id="image" src={require(`./img/${item.image}.jpg`)} className="rounded img-responsive z-depth-1 shadow" style={{ width: item.width2 || '100%', height: '100%' }} alt="avatar" />
                                        </div>

                                        <div className="col-md-6" style={{ width: item.width3 }}>
                                            <h4 className="font-weight-bold mb-3">{item.name}</h4>
                                            <h6 className="font-weight-bold grey-text mb-3">{item.role}</h6>
                                            <p className="grey-text">{item.description}</p>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>


                    <div className="row text-center border text-md-left ml-3 mb-3 text-center justify-content-center z-depth-1 shadow" style={{ width: '95%' }}>


                        <nav class="navbar col-xl-12 z-depth-1 shadow justify-content-center bg-primary text-white ">
                            <h4 className="h1-responsive font-weight-bold  " style={{ letterSpacing: '2px' }}>FORMER DIRECTED STUDIES</h4>
                        </nav>
                        {
                            collections.directed.map((item) => {
                                return (
                                    <div id="team-card" className="col-xl-6 col-md-12 col-sm-12 col-lg-12 pt-5 mb-5 d-md-flex justify-content-center" >
                                        <div className="img-responsive mb-4 mr-4 team" style={{ width: item.width || '100%', height: item.height }}>
                                            <img id="image" src={require(`./img/${item.image}.jpg`)} className="rounded img-responsive z-depth-1 shadow" style={{ width: item.width2 || '100%', height: '100%' }} alt="avatar" />
                                        </div>

                                        <div className="col-md-6" style={{ width: item.width3 }}>
                                            <h4 className="font-weight-bold mb-3">{item.name}</h4>
                                            <h6 className="font-weight-bold grey-text mb-3">{item.role}</h6>
                                            <p className="grey-text">{item.description}</p>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>


                    <div className="row text-center border text-md-left ml-3 mb-3 text-center justify-content-start z-depth-1 shadow" style={{ width: '95%' }}>


                        <nav class="navbar col-xl-12 z-depth-1 shadow justify-content-center bg-primary text-white ">
                            <h4 className="h1-responsive font-weight-bold  " style={{ letterSpacing: '2px' }}>FORMER VOLUNTEERS</h4>
                        </nav>
                        {
                            collections.volunteers.map((item) => {
                                return (
                                    <div id="team-card" className="col-xl-6 col-md-12 col-sm-12 col-lg-12 pt-5 mb-5 d-md-flex justify-content-center" >
                                        <div className="img-responsive mb-4 mr-4 team" style={{ width: item.width || '100%', height: item.height }}>
                                            <img id="image" src={require(`./img/${item.image}.jpg`)} className="rounded img-responsive z-depth-1 shadow" style={{ width: item.width2 || '100%', height: '100%' }} alt="avatar" />
                                        </div>

                                        <div className="col-md-6" style={{ width: item.width3 }}>
                                            <h4 className="font-weight-bold mb-3">{item.name}</h4>
                                            <h6 className="font-weight-bold grey-text mb-3">{item.role}</h6>
                                            <p className="grey-text">{item.description}</p>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>

                </section>


            </div>
        )
    }
}

