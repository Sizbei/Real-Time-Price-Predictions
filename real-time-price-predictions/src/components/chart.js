import React, { Component , useState} from "react";
import ChartComponent from "react-chartjs-2";


export default function Chart() {

    const [Data, setData] = useState(null);

    const url = 'http://127.0.0.1:5000/'
    fetch(url).then(
        res => res.json().then(
            data => {
                console.log({
                    'data' : {
                        datasets: data['current'],
                        labels: ['a']
                    });
                setData(
                    {
                        'data' : {
                            datasets: data['current'],
                            labels: ['a']
                        }
                    }
                )
            }
        )
    );

    return (
        <div>
            { Data && <ChartComponent data={Data} type={'line'}/> }
        </div>
    )
}