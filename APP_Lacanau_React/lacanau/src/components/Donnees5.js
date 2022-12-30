import { useEffect, useState } from 'react';

export default function Donnees(nb) {
    const [donnee8,setter8] = useState();
    const [donnee9,setter9] = useState();

    useEffect(() => {
        fetch(`http://localhost:8081/?pollutionHourtin=78`).then((response) => response.json()).then((data) => {
            setter8(data['bdd_values'][nb]['taux_pollution']);
            if(donnee8<50){
                setter9('☢️')
            }
            if(donnee8>=50&&donnee8<90){
                setter9('⭐')
            }
            if(donnee8>=90){
                setter9('✨')
            }
        });
    });

    return (
       <text> {donnee8} ➡ {donnee9} </text>
    );
}