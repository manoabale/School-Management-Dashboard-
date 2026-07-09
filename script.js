// School Chart Example
const ctx = document.getElementById('schoolChart').getContext('2d');
const schoolChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Students', 'Teachers', 'Classes'],
    datasets: [{
      label: 'School Stats',
      data: [850, 65, 40],
      backgroundColor: ['#38bdf8', '#22c55e', '#ef4444']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});

// Example refresh button
document.getElementById('refresh').addEventListener('click', () => {
  alert("School data refreshed!");
});
