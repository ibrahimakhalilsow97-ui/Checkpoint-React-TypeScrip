
    import { Component } from 'react';

    // Définition du type du State
    interface CounterState {
    count: number;
    }

    // Composant basé sur une classe
    class Counter extends Component<{}, CounterState> {

    // Initialisation du compteur
    state: CounterState = {
        count: 0
    };

    // Fonction pour incrémenter le compteur
    increment = () => {
        this.setState((prevState) => ({
        count: prevState.count + 1
        }));
    };

    // Affichage du compteur
    render() {
        return (
        <div>
            <p>Count : {this.state.count}</p>

            <button onClick={this.increment}>
            Increment
            </button>
        </div>
        );
    }
    }

    // Exportation du composant
    export default Counter;
