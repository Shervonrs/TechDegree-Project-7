Chart.defaults.global.elements.point.backgroundColor = '#000'
let trafficWidget = document.getElementById("traffic_widget").getContext('2d');
let daily_traffic_widget = document.getElementById("daily_traffic_widget");
let daily_traffic_pie = document.getElementById("daily_traffic_pie");
const traffic_li = document.querySelectorAll(".traffic_li");
let array = [];

let units = {
  Hourly : [1500, 750, 1250, 1950, 500, 1350, 800, 1200, 2000, 300, 1000 ],
  Daily : [1600, 850, 1350, 1050, 600, 1450, 900, 1300, 2100, 400, 2000 ],
  Weekly : [1700, 950, 1450, 1905, 700, 1550, 1000, 1400, 2200, 500, 1700 ],
  Monthly : [1800, 1050, 1550, 1509, 200, 1650, 1100, 1500, 2300, 1600, 2200 ],
}

let trafficData= {
    labels: ["16-22", "23-29", "30-5","6-12", "13-19", "20-26",
  "27-3", "4-10", "11-17", "18-24", "25-31"],
  datasets: [{
    data: [ 750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
    backgroundColor: 'rgb(242,234,152, 0.2)',
    borderWidth: 2,
    pointBackgroundColor:'white',
    lineTension: 0,
    radius: 5
  }]
};

let trafficOption = {
  aspectRatio: 2.5,
  animation: {
    duration: 3000
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  },
  legend: {
    display: false
  }
};

let daily_traffic = {
  labels: ["S", "M","T", "W", "T", "F", "S"],
  datasets:[{
    data:[75, 115, 175, 125, 225, 200,100 ],
    backgroundColor: "#f2ea98",
    borderWidth:1
  }]
}

let traffic_daily_option ={
  scales:{
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  },
  legend:{
    display: false
  }
}

let daily_pie_data = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [{
    label: 'MOBILE USERS',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
      '#f2ea98',
      '#c6845d',
      '#459687'
    ]
  }]
};

let daily_pie_option = {
  legend: {
    position: "right",
    labels: {
      boxWidth: 20,
      fontStyle: 'bold'
    }
  }
};

//Creates line chart
let trafficChart = new Chart(trafficWidget, {
  type: 'line',
  data: trafficData,
options: trafficOption
});

//Creates bar chart
let dailyTrafficChart = new Chart(daily_traffic_widget,{
  type:"bar",
  data: daily_traffic,
  options:traffic_daily_option
});

//Creates doughnut chart
let dailymobile= new Chart(daily_traffic_pie,{
  type:"doughnut",
  data: daily_pie_data,
  options:daily_pie_option
});

//loops over time period array and return buttons and
const unitPicker = function(choice) {
  const entries = Object.entries(units);
  for(let i = 0; i < entries.length; i++){
    let timePeriod = entries[i][0];
    let dataArray = entries[i][1];
    if(choice === timePeriod) {
      let emptyArray = trafficData.datasets[0]["data"] = "";
      let newArray =trafficData.datasets[0]["data"] = dataArray;
      return choice;
    }
  }
}

document.addEventListener('click', (e) => {
  const btn = e.target;
    if (btn.tagName ==="LI") {
      for(let i = 0; i<traffic_li.length; i++) {
        traffic_li[i].classList.remove("bgcolor");
  }
}
if(btn.innerText === unitPicker(btn.innerText) && btn.tagName !=="svg"){
   trafficChart.update();
   btn.classList.add("bgcolor");
 }
});
