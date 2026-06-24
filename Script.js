const ctx = document.getElementById('myChart');

new Chart(ctx, {

    type: 'bar',

    data: {

        labels: ['Male', 'Female'],

        datasets: [{

            label: 'Population',

            data: [60, 40],

            borderWidth: 1

        }]

    },

    options: {

        scales: {

            y: {

                beginAtZero: true

            }

        }

    }

});
