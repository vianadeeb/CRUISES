import React, { Component } from 'react';
import { Row, Col , Button} from "react-bootstrap";
import {BrowserRouter,Route} from 'react-router-dom';
import Footer from './component/footer';
//import XX from './component/xx';
import Category from './component/category';
import Branch from './component/addbranch';
import Login from './component/login';
import Friendly from './component/friendly';
import Posts  from './component/posts';
//import Norway from './component/norway';
import Newsletter from './component/newsletter';
import Latest from './component/latest';
import Diverse from './component/diverse';
//import Book from './component/book';
import Aboutus from './component/aboutus';
import About from './component/about';
//import Price from './component/price';
import Overview from './component/overview';
import Testimonials from './component/testimonials';
import Vian from './component/vian';
import Contact from './component/contact';
import Contactc from './component/contactc';
import Formc from './component/formc';
import Cruises from './component/cruises';
import Ccruises from './component/ccruises';
import Container from "./component/container";
//import Spinner from "./component/spinner";
//import Sp from "./component/sp";
import Skills from "./component/wow";
import './App.css'
import Holiday from './component/holiday';
//import ScrollApp from './component/scroll';
//import Loadingscreen from './component/loadingpage';
//import LoaderComponent from './components/LoaderComponent';
class App extends Component {
  state = {
    // isOpen: false,
    isLoading: false,
    intervalId: 0
  };

  componentDidMount() {
    this.handleLoadingPage();
  }
  

  // Her we simulate fake network request for isLoading purpose
  simulateNetworkRequest = () => {
    return new Promise(resolve => setTimeout(resolve, 2000));
  };

  // We call this handler in ComponentDidMount when Initial Render happens to show loader for us ;)
  handleLoadingPage = () => {
    this.setState({ isLoading: true }, () => {
      this.simulateNetworkRequest().then(() => {
        this.setState({ isLoading: false });
      });
    });
  };

  // We define steps when scrolling to top happens
  // if window offset is 0, do nothing just clear interval
  scrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    // otherwise, scroll to top by 65
    window.scroll(0, window.pageYOffset - 65);
  };

  // handles scrollToTop when onClick happens
  scrollToTop = () => {
    let intervalId = setInterval(this.scrollStep, 35);
    this.setState({ intervalId: intervalId });
  };


  render() { 
    const { isLoading } = this.state;
    return (
      <div className="poi">
       <React.Fragment>
        {isLoading ? (
          <Container>
            <Row className="justify-content-md-center">
              <Col md="auto">
                {/* <Spinner /> */}
              </Col>
            </Row>
          </Container>
        ) :(
    
            // <Navbar className="justify-content-end" fixed="bottom" id="uy">
            <div id="scroll">
              <Button variant="outline-info" onClick={this.scrollToTop} className="justify-content-end" fixed="bottom" id="uy" >
            <i className="fas fa-arrow-up"></i>
              </Button>
              </div>
            // </Navbar>
        )}
      </React.Fragment>
      {/* <div id='ap'> */}
     
       <Vian />
       {/* <Sp /> */}
       <BrowserRouter>
       <div>
         <Route exact path='/' component={Login} />
         {/* <Route exact path='/' component={Holiday} /> */}
         <Route exact path='/' component={Category} />
         <Route exact path='/' component={Branch} />
         <Route exact path='/' component={About} />
         <Route exact path='/' component={Friendly} />
         <Route exact path='/' component={Testimonials} />
         <Route exact path='/' component={Latest} />
         <Route exact path='/' component={Newsletter} />
         <Route path='/aboutus' component={Aboutus} />
         <Route path='/aboutus' component={Overview} />
         <Route path='/aboutus' component={Diverse} />
         <Route path='/aboutus' component={Testimonials} />
         <Route path='/aboutus' component={Posts} />
         <Route path='/contact' component={Contact} />
         <Route path='/contact' component={Contactc} />
         <Route path='/contact' component={Formc} />
         <Route path='/cruises' component={Cruises} />
         <Route path='/cruises' component={Ccruises} />
     
       </div>

       </BrowserRouter>
       {/* </div> */}
       <Footer />
      <Skills />
     
 {/* <Spinner />  */}
   
        {/* <Container /> */}





     





        {/* <XX /> */}
         {/* <Book /> */}
         {/* <Price /> */}
        {/* <Norway /> */}
        {/* <Posts /> */}
        
      
       
          {/* Hello AppDividend */}
        {/* <LoaderComponent /> */}
        {/* <ScrollApp/> */}
        {/* <Loadingscreen /> */}
      </div>
    );
  }
}

export default App;


