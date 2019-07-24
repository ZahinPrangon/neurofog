import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'


class Involved extends Component  {
    render() {
        return (   
            <div> 
                    <div class="involved-landing">


                        <div className= "container d-flex justify-content-center" style={{width: 'auto'}}>
                            <p id = "main-tag" style ={{ letterSpacing: '8px', padding: '20px', border: 'none' }} className="text-center">GET INVOLVED</p>
                        </div>

                        <div class ="scroll" id = "scroll">
                            <p id = "tag" style ={{ letterSpacing: '3px' }} className="text-center">Scroll Down!</p>
                                <a href="#section1">
                                    <i class="fas fa-chevron-down text-center"></i>
                                </a>
                        </div>

                    </div> 

                    <ScrollableAnchor id={'section1'}>              
                        <div className= "container" style= {{ paddingTop: '250px' }} id = "section1" data-spy="scroll" data-target="#section1" data-offset="0" class="scrollspy-example container">
                                <h2 className="text-center" style={{letterSpacing: '3px', paddingBottom: '35px'}}>Participate In Our Research</h2>
                                <p>We are always looking for participants for our research! Participating in studies is a great way to get yourself involved with the university and to explore your interests in psychological research. Below you will find a list of studies that you can participate in. Visit the <a href = "/contact">Contact Us</a>  section if you would like to get in contact.</p>
                        </div>
                    </ScrollableAnchor>
                        <div className= "container" style= {{paddingTop: '50px'}}>
                            <h2 className="text-center" style={{letterSpacing: '3px', paddingBottom: '35px'}}>Psychology Research Experience Pool (PREP)</h2>
                            <p>Some of our studies may be availble via the MUN Psychology Research Experience Pool (PREP). PREP gives extra course credit for completing Psychology experiments on MUN campus. To see if your course qualifies for PREP, please visit below.</p>
                            <p className="text-center">
                            <a style={{letterSpacing: '3px', paddingBottom: '35px', textAlign: 'center'}} href = "https://mun.sona-systems.com/Default.aspx?ReturnUrl=%2f" target ="_blank" rel="noopener noreferrer">MUN SONA</a>
                            </p>
                        </div>


                        <div className= "container" style= {{paddingTop: '50px'}}>
                            <h2 className="text-center" style={{letterSpacing: '3px', paddingBottom: '35px'}}>Prospective Students</h2>
                            <p style = {{ paddingBottom: '25px'}}>We are always looking for students to volunteer and help out in the laboratory. You are welcome to contact Dr. Fawcett about potential opportunities to gain research experience in the Neurofog Lab. Volunteers should be prepared to commit to volunteering a few hours per week for at least one academic year. If you are you interested in becoming a part of the team, please  <a href = "/contact">contact us.</a></p>
                        </div>
            </div>


            );
    }
    
}

export default Involved;