import { useEffect, useState } from 'react';

export default function Donnees(nb) {
    const [donnee6,setter6] = useState();
    const [donnee7,setter7] = useState();

    useEffect(() => {
        fetch(`http://localhost:8081/?pollutionHourtin=78`).then((response) => response.json()).then((data) => {
            setter6(data['bdd_values'][nb]['taux_pollution']);
            if(donnee6<50){
                setter7('☢️')
            }
            if(donnee6>=50&&donnee6<90){
                setter7('⭐')
            }
            if(donnee6>=90){
                setter7('✨')
            }
        });
    });

    return (
       <text> {donnee6} ➡ {donnee7} </text>
    );
}