import React, { Component , useState, useEffect} from "react";
import {Line} from 'react-chartjs-2';
import axios from 'axios';


export default function Chart() {

    const [Data, setData] = useState(null);

    const url = 'http://127.0.0.1:5000/'
    useEffect(async () => {
        const result = await axios(url);
        setData({
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [
                {
                    label: 'BTC-USD Price',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(75,192,192,1)',
                    data: result.data['current']
                }
            ]
        });
    }, []);

    return (
        <div>
            {
                Data && <Line
                data={Data}
                options={{
                    title: {
                        display: true,
                        text: 'Bitcoin Price',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />
            }
        </div>
    )
}