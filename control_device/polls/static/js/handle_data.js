
// const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
// const $ = document.querySelector.bind(document)
// const current_time = $('.current-time')
// var today = new Date();
// var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var dateTime = date + ' ' + time;
// var nhiet_do = {
//     series: [50],
//     chart: {
//         height: 200,
//         type: 'radialBar',
//     },
//     plotOptions: {
//         radialBar: {
//             hollow: {
//                 size: '70%',
//             },
//             dataLabels: {
//                 value: {
//                     formatter: function (val) {
//                         return val + ' \xB0C ';
//                     }
//                 }
//             }
//         },
//     },
//     labels: ['Warm'],
// };

// var nhiet_do_chart = new ApexCharts(document.querySelector("#Tempurature"), nhiet_do);
// nhiet_do_chart.render();

// var do_am = {
//     series: [50],
//     chart: {
//         height: 200,
//         type: 'radialBar',
//     },
//     plotOptions: {
//         radialBar: {
//             hollow: {
//                 size: '70%',
//             }
//         },
//     },
//     labels: ['Cool'],
// };

// var do_am_chart = new ApexCharts(document.querySelector("#Humidity"), do_am);
// do_am_chart.render();

// var anh_sang = {
//     series: [50],
//     chart: {
//         height: 200,
//         type: 'radialBar',
//     },
//     plotOptions: {
//         radialBar: {
//             hollow: {
//                 size: '70%',
//             },
//             dataLabels: {
//                 value: {
//                     formatter: function (val) {
//                         return val + ' Lux';
//                     }
//                 }
//             }
//         },
//     },
//     labels: ['Bright'],
// };

// var anh_sang_chart = new ApexCharts(document.querySelector("#Light"), anh_sang);
// anh_sang_chart.render();

// var options = {
//     series: [{
//         name: "Temp",
//         data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
//     },
//     {
//         name: "Humi",
//         data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
//     },
//     {
//         name: 'Light',
//         data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
//     }
//     ],
//     chart: {
//         height: 335,
//         type: 'line',
//         zoom: {
//             enabled: false
//         },
//     },
//     xaxis: {
//         categories: ['01', '02', '03', '04', '05', '06', '07', '08', '09'
//         ],
//     },
//     // ,'10 Jan', '11 Jan', '12 Jan'
//     grid: {
//         borderColor: '#f1f1f1',
//     }
// };

// var chart = new ApexCharts(document.querySelector("#Chart"), options);
// chart.render();
// var status_plant
// const bt_lua = $('.lua')
// const bt_ngo = $('.ngo')
// const bt_hoa_hong = $('.hoa_hong')
// const bt_hoa_cuc = $('.hoa_cuc')
// const pump = $('.pump')
// const mode = $('.mode')
// const led = $('.led')
// var status_pump, status_mode, status_brightness

// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value;
// slider.addEventListener('change', slider.oninput = function () {
//     output.innerHTML = this.value;
//     status_brightness = this.value

//     fetch('http://127.0.0.1:8000/control/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-CSRFToken': csrftoken,
//         },
//         credentials: 'same-origin',
//         body: JSON.stringify({
//             "Plant": status_plant,
//             "Pump": status_pump,
//             "Mode": status_mode,
//             "Brightness": status_brightness
//         }),
//     })
//         .then(response => response.json())
//         .then(data => {
//         })
//         .catch(error => console.error('Error:', error));
// })

// fetch('http://127.0.0.1:8000/control/')
//     .then(response => response.json())
//     .then(data => {
//         status_plant = data.Plant
//         status_pump = data.Pump
//         status_mode = data.Mode
//         status_brightness = data.Brightness
//         if (status_plant == "Paddy")
//             bt_lua.classList.add('active')
//         if (status_plant == "Corn")
//             bt_ngo.classList.add('active')
//         if (status_plant == "Rose")
//             bt_hoa_hong.classList.add('active')
//         if (status_plant == "Chrysanthemum")
//             bt_hoa_cuc.classList.add('active')
//         led.value = status_brightness
//         output.innerHTML = status_brightness;
//     })

// setInterval(function () {
//     let today = new Date();
//     let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//     let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//     let dateTime = date + ' ' + time;
//     current_time.innerHTML = dateTime

//     let arr1 = []
//     let arr2 = []
//     let arr3 = []

//     fetch('http://127.0.0.1:8000/inforsensor/')
//         .then(response => response.json())
//         .then(data => {
//             nhiet_do_chart.updateSeries([data.nhiet_do])
//             do_am_chart.updateSeries([data.do_am])
//             anh_sang_chart.updateSeries([data.anh_sang])
//         })

//     fetch('http://127.0.0.1:8000/control/')
//         .then(response => response.json())
//         .then(data => {
//             status_mode = data.Mode
//             status_brightness = data.Brightness
//             mode.innerHTML = status_mode
//             status_pump = data.Pump
//             if (status_pump == "Off") {
//                 pump.classList.remove('enable')
//                 pump.classList.add('disable')
//             } else {
//                 pump.classList.remove('disable')
//                 pump.classList.add('enable')
//             }
//         })

//     fetch('http://127.0.0.1:8000/graph/')
//         .then(response => response.json())
//         .then(datas => {
//             datas.forEach(data => {
//                 arr1.push(data.nhiet_do)
//                 arr2.push(data.do_am)
//                 arr3.push(data.anh_sang)
//             });
//             chart.updateSeries([{
//                 name: 'Temp',
//                 data: arr1,
//             },
//             {
//                 name: 'Humi',
//                 data: arr2,
//             },
//             {
//                 name: 'Light',
//                 data: arr3,
//             },
//             ])
//         })
// }, 1000)

// bt_lua.onclick = function () {
//     status_plant = "Paddy"
//     fetch('http://127.0.0.1:8000/control/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-CSRFToken': csrftoken,
//         },
//         credentials: 'same-origin',
//         body: JSON.stringify({
//             "Plant": status_plant,
//             "Pump": status_pump,
//             "Mode": status_mode,
//             "Brightness": status_brightness
//         }),
//     })
//         .then(response => response.json())
//         .then(data => {
//             $('.item_list.active').classList.remove('active')
//             bt_lua.classList.add('active')
//         })
//         .catch(error => console.error('Error:', error));
// }

// bt_ngo.onclick = function () {
//     status_plant = "Corn"
//     fetch('http://127.0.0.1:8000/control/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-CSRFToken': csrftoken,
//         },
//         credentials: 'same-origin',
//         body: JSON.stringify({
//             "Plant": status_plant,
//             "Pump": status_pump,
//             "Mode": status_mode,
//             "Brightness": status_brightness
//         }),
//     })
//         .then(response => response.json())
//         .then(data => {
//             $('.item_list.active').classList.remove('active')
//             bt_ngo.classList.add('active')
//         })
//         .catch(error => console.error('Error:', error));
// }

// bt_hoa_hong.onclick = function () {
//     status_plant = "Rose"
//     fetch('http://127.0.0.1:8000/control/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-CSRFToken': csrftoken,
//         },
//         credentials: 'same-origin',
//         body: JSON.stringify({
//             "Plant": status_plant,
//             "Pump": status_pump,
//             "Mode": status_mode,
//             "Brightness": status_brightness
//         }),
//     })
//         .then(response => response.json())
//         .then(data => {
//             $('.item_list.active').classList.remove('active')
//             bt_hoa_hong.classList.add('active')
//         })
//         .catch(error => console.error('Error:', error));
// }

// bt_hoa_cuc.onclick = function () {
//     status_plant = "Chrysanthemum"
//     fetch('http://127.0.0.1:8000/control/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-CSRFToken': csrftoken,
//         },
//         credentials: 'same-origin',
//         body: JSON.stringify({
//             "Plant": status_plant,
//             "Pump": status_pump,
//             "Mode": status_mode,
//             "Brightness": status_brightness
//         }),
//     })
//         .then(response => response.json())
//         .then(data => {
//             $('.item_list.active').classList.remove('active')
//             bt_hoa_cuc.classList.add('active')
//         })
//         .catch(error => console.error('Error:', error));
// }

// pump.onclick = function () {
//     if (status_mode == "Off") {
//         if (status_pump == "Off") {
//             status_pump = "On"
//         } else {
//             status_pump = "Off"
//         }
//         fetch('http://127.0.0.1:8000/control/', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-CSRFToken': csrftoken,
//             },
//             credentials: 'same-origin',
//             body: JSON.stringify({
//                 "Plant": status_plant,
//                 "Pump": status_pump,
//                 "Mode": status_mode,
//                 "Brightness": status_brightness
//             }),
//         })
//             .then(response => response.json())
//             .then(data => { })
//             .catch(error => console.error('Error:', error));
//     }
// }

// mode.onclick = function () {
//     if (status_mode == "Off") {
//         status_mode = "Auto"
//     } else {
//         status_mode = "Off"
//     }
//     fetch('http://127.0.0.1:8000/control/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-CSRFToken': csrftoken,
//         },
//         credentials: 'same-origin',
//         body: JSON.stringify({
//             "Plant": status_plant,
//             "Pump": status_pump,
//             "Mode": status_mode,
//             "Brightness": status_brightness
//         }),
//     })
//         .then(response => response.json())
//         .then(data => { })
//         .catch(error => console.error('Error:', error));
// }