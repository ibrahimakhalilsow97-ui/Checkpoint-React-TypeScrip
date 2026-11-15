
    import { FC } from 'react';

    // Définition des propriétés du composant
    interface GreetingProps {
    name: string;
    }

    // Composant fonctionnel avec typage des propriétés
    const Greeting: FC<GreetingProps> = ({ name }) => {
    return (
        <div>
        <h2>Hello, {name} !</h2>
        </div>
    );
    };

    // Exportation du composant
    export default Greeting;
