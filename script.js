// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.navbar ul');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // Initialize radar chart if element exists
  const ctx = document.getElementById('maturityChart');
  if (ctx && window.Chart) {
    const maturityData = {
      labels: ['Strategy', 'Technology', 'Data & AI', 'People & Culture', 'Innovation'],
      datasets: [{
        label: 'Maturity',
        backgroundColor: 'rgba(201, 164, 92, 0.2)',
        borderColor: 'rgba(201, 164, 92, 1)',
        pointBackgroundColor: 'rgba(201, 164, 92, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(201, 164, 92, 1)',
        data: [65, 59, 80, 81, 56]
      }]
    };
    new Chart(ctx, {
      type: 'radar',
      data: maturityData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          r: {
            angleLines: {
              color: 'rgba(246,244,237,0.12)'
            },
            grid: {
              color: 'rgba(246,244,237,0.22)'
            },
            pointLabels: {
              color: '#fff',
              font: {
                size: 12
              }
            },
            ticks: {
              backdropColor: 'transparent',
              color: '#fff',
              showLabelBackdrop: false
            },
            min: 0,
            max: 100
          }
        }
      }
    });
  }
});