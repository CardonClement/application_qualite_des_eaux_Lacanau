import { useEffect, useState } from 'react';

export default function Donnees(nb) {
    const [donnee2,setter2] = useState();
    const [donnee3,setter3] = useState();

    useEffect(() => {
        fetch(`http://localhost:8081/?pollutionHourtin=78`).then((response) => response.json()).then((data) => {
            setter2(data['bdd_values'][nb]['taux_pollution']);
            if(donnee2<50){
                setter3('☢️')
            }
            if(donnee2>=50&&donnee2<90){
                setter3('⭐')
            }
            if(donnee2>=90){
                setter3('✨')
            }
        });
    });

    return (
       <text> {donnee2} ➡ {donnee3} </text>
    );
}