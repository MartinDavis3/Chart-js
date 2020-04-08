var myFirstChart = document.getElementById( 'my-first-chart' ).getContext( '2d' );

var myChartData = { 
    type: 'pie', 
    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    },
    data: {
        labels: [ 'First Sample', 'Second Sample', 'Third Sample' ],
        datasets: [{
            label: 'Number of people who like lemonade',
            data: [ 24, 16, 35 ],
            backgroundColor: [
                'rgb( 255, 0, 0)',
                'rgb( 0, 255, 0)',
                'rgb( 0, 0, 255)'                
            ],
            borderColor: [
                'rgb( 195, 0, 0)',
                'rgb( 0, 195, 0)',
                'rgb( 0, 0, 195)'                
            ],
            borderWidth: 2
        }]
    }

};



var myChart = new Chart( myFirstChart, myChartData );

