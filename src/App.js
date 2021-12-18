import { Component } from 'react';
import { Route } from 'react-router-dom';
import { Boxes } from './Components/boxes/boxes';
import './App.css';
import {NavBar} from './Components/navbar/navbar';
import {Sideright} from './Components/sideright/sideright';
import {Sidebar} from "./Components/sidebar/sidebar"
import Form from './Components/form/form';

class App extends Component {
    constructor() 
    {
    super();
    this.state = {
            boxes: [],
            searchTitle: [],
            route: 'coments'
        };
    }

    componentDidMount(){
        fetch('/api/posts/?format=json')
            .then(response => response.json())
            .then(boxBody => this.setState({
                boxes: boxBody
            }))
    }

    onRouteChange= () => {
        this.setState({route: 'form'})
    }



render(){
        const {boxes,searchTitle} = this.state;
        const filterTitle = boxes.filter(Box =>Box.title.includes(searchTitle));
        return(
          <div className = "App">
                <NavBar/>
            <div className = "container">
                <div className='container-left'>
                    <Sidebar />
                </div>
                <div className='container-main'>
                    {this.state.route === 'coments'
                        ?<Boxes boxes = {filterTitle} onRouteChange = {this.onRouteChange}/>
                        :<Form/>       
                    }
                </div>
                <div className='container-right'>
                    <Sideright />
                </div>
            </div> 
          </div>
        )
    }
}
export default App;