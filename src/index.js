import React from 'react';
import ReactDOM from 'react-dom'

import Card from './components/Card.js';
import Collapse from './components/Collapse.js';




const App = () => {
   
    return (
        <div className="container">
            <div className="row">
                <div className="card-group w-100">
                   <div className="col">

                        <Collapse href="collapseExample1"> 
                            <Card 
                            cardTitle="Home Office" 
                            cardText="arbeiten" 
                            updatedTime="Last Updated 1 min ago" 
                            image="https://picsum.photos/id/0/200/300"
                             />
                        </Collapse> 
                    </div>

                    <div className="col">

                        <Collapse href="collapseExample2"> 
                            <Card 
                            cardTitle="Freizeit" 
                            cardText="segeln" 
                            updatedTime="Last Updated 2 min ago" 
                            image="https://picsum.photos/id/1011/200/300"
                             />
                        </Collapse> 
                    </div>

                    <div className="col">

                        <Collapse href="collapseExample3"> 
                            <Card 
                            cardTitle="Hobby" 
                            cardText="photographieren" 
                            updatedTime="Last Updated 3 min ago" 
                            image="https://picsum.photos/id/250/200/300"
                             />
                        </Collapse> 
                    </div>
                </div>
            </div>
   
        </div>
    );
}

ReactDOM.render(

    <App />,
    document.getElementById('root')
);


