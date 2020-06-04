window.chart = null;

const renderChart = (confirmed, deaths , recovered, time) => {

    let responsive = () => {
        if(window.matchMedia("(max-width: 500px)").matches) {
          return false;
        } else {
          return true;
        }
      }
      
      
    let ctx = document.getElementById('chart').getContext('2d');
    let chart_config = {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: time,
            datasets: [{
                label: 'Confirmed Case',
                borderColor: '#c5e3f6',
                backgroundColor: 'rgba(197, 227, 246,0.2)',
                fill: true,
                pointBackgroundColor: '#482ff7',
                borderCapStyle: 'round',
                data: confirmed
            },
            {
              label: 'Deaths',
              borderColor: '#fc85ae',
              backgroundColor: 'rgba(252, 133, 174,0.2)',
              fill: true,
              pointBackgroundColor: '#ff304f',
              borderCapStyle: 'round',
              data: deaths
          },
          {
              label: 'Recovered',
              borderColor: '#a7ff83',
              backgroundColor: 'rgba(167, 255, 131, 0.2)',
              fill: true,
              pointBackgroundColor: '#2cb978',
              borderCapStyle: 'round',
              data: recovered
          }],
        },
    
        // Configuration options go here
        options: {
            responsive: true,
            maintainAspectRatio: true,
            legend: {
                display: responsive(),
                labels: {
                  fontColor: '#F6F6F6',
                }
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: false,
                        fontColor: '#F6F6F6',
                        fontSize: 12
                    },
                    gridLines: {
                        display: false,
                        color: '#F6F6F6'
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: false,
                        fontColor: '#F6F6F6'
                    },
                    gridLines: {
                        display: true,
                        color: '#F6F6F6'
                    }
                }],
            }
        }
}
    
    if (window.chart != undefined) {
        window.chart.destroy();
    }

    window.chart = new Chart(ctx, chart_config);
        
    chart.canvas.style.height = '100%';
    chart.canvas.style.width = '90%';
}

export default renderChart;