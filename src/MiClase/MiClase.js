import React, { Component } from 'react';

class Miclase extends Component {
    constructor(){
        super();
        this.state={
            count:1
        };
        this.clickBotones=this.clickBotones.bind(this);
    }

    componentDidMount(){
        this.setState({
            count:1
        });
    }

    clickBotones(e){
        if(e.target.id==="sumar"){
            this.setState({
                count:this.state.count+1
            });
        }
        else if(e.target.id==="restar" && this.state.count > 1 ){
            this.setState({
                count:this.state.count-1
            });
        }
        else if(e.target.id==="reiniciar"){
            this.setState({
                count:1
            });
        }
    }
    render (){
        return (
            <div className="contenido">
                <h2>Contador {this.state.count}</h2>
                <p>
                <button id="sumar" onClick={this.clickBotones}>+</button>
                <button id="restar" onClick={this.clickBotones}>-</button>
                <button id="reiniciar" onClick={this.clickBotones}>Reiniciar</button>
                </p>
            </div>
        );
    }
}

export default Miclase;