import React, { Component , useState, useEffect} from "react";
import {Line} from 'react-chartjs-2';
import axios from 'axios';


export default function Chart() {

    const [Data, setData] = useState(null);

    const url = 'http://127.0.0.1:5000/'
    useEffect(async () => {
        const result = await axios(url);
        let currentTime = new Date();
        const times = [new Date(currentTime.getTime())];
        for (let i=0; i < 100; i++) {
            currentTime = new Date( currentTime.getTime() - 1000 * 60 * 15 );
            times.unshift(currentTime);
        }

        currentTime = new Date();
        const times2 = [new Date(currentTime.getTime())];
        for (let i=0; i < 100; i++) {
            currentTime = new Date( currentTime.getTime() + 1000 * 60 * 15 );
            times2.push(currentTime);
        }
        const empty = []
        for (let i =0; i < 100; i++) {
            empty.push(null)
        }
        const test = [ ...empty , ...result.data['prediction']];
        setData({
            labels: [...times, ...times2],
            datasets: [
                {
                    label: 'BTC-USD Price',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(75,192,192,1)',
                    data: result.data['current']
                }, {
                    label: 'Predicted BTC-USD Price',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'rgb(192,176,75)',
                    data: test
                }
            ],
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
                    },
                    scales: {
                        xAxes: [{
                            type: 'time',
                            ticks: {
                                autoSkip: true,
                                maxTicksLimit: 20
                            }
                        }]
                    }
                }}
            />
            }
        </div>
    )
}