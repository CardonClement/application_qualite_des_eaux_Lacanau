import { useEffect, useState } from 'react';

export default function Donnees(valeur) {
    const [donnee1,setter1] = useState();

    useEffect(() => {
        fetch(`http://localhost:8081/?pollutionHourtin=${valeur}`).then((response) => response.json()).then((data) => {
            setter1(data['hourtin_values']['pollutionHourtin'])
        });
    });

    return (
       <text> {valeur} ➡ {donnee1} </text>
    );
}