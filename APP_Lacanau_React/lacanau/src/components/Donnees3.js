import { useEffect, useState } from 'react';

export default function Donnees(nb) {
    const [donnee4,setter4] = useState();
    const [donnee5,setter5] = useState();

    useEffect(() => {
        fetch(`http://localhost:8081/?pollutionHourtin=78`).then((response) => response.json()).then((data) => {
            setter4(data['bdd_values'][nb]['taux_pollution']);
            if(donnee4<50){
                setter5('☢️')
            }
            if(donnee4>=50&&donnee4<90){
                setter5('⭐')
            }
            if(donnee4>=90){
                setter5('✨')
            }
        });
    });

    return (
       <text> {donnee4} ➡ {donnee5} </text>
    );
}