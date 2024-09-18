const ctx = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['March', 'April', 'May', 'June', 'July', 'August', 'September'],
        datasets: [{
            data: [16.7, 21.3, 24.5, 20.9, 18.5, 16.4, 13.1],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            fill: true,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false // Hides the legend entirely
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark background for tooltip
                titleColor: 'white', // Tooltip title color
                bodyColor: 'white', // Tooltip body text color
                callbacks: {
                    label: function(tooltipItem) {
                        return `Revenue: $${tooltipItem.raw.toLocaleString()}k`; // Adds "k" to the tooltip label
                    }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: false, // Hides the x-axis title
                },
                grid: {
                    display: false // Hides grid lines on the x-axis
                },
                ticks: {
                    color: 'black' // X-axis tick labels color
                }
            },
            y: {
                title: {
                    display: false // Hides the y-axis title
                },
                grid: {
                    display: false // Hides grid lines on the y-axis
                },
                ticks: {
                    color: 'black', // Y-axis tick labels color
                    callback: function(value) {
                        return `$${value}k`; // Formats the y-axis values with a "k"
                    }
                },
                min: 0 // Ensures the graph starts from $0
            }
        }
    }
});
