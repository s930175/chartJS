
$.ajax({
    url: "home.json",
    method: "GET",
    dataType: "json",
}).done(function (data) {
    // console.log(data);
    let name = [];
    let weight = [];
    let category = [];
    let price = [];
    let material = [];


    //資料塞進空陣列
    for (i = 0; i < 15; i++) {
        name.push(data[i].name);
        weight.push(data[i].weight);
        category.push(data[i].category);
        price.push(data[i].price);
        material.push(data[i].material)
    }
    // console.log(name)
    // console.log(weight)
    // console.log(category)
    // console.log(price)
    // console.log(material)
    //BAR
    let ctxBar = document.getElementById("barCt");
    let ctxLine = document.getElementById("lineCt");
    let ctxPie = document.getElementById("pieCt");
    let ctxPolar = document.getElementById("polarCt");

    const dataBar = {
        labels: name,
        datasets: [
            {
                label: "重量",
                data: weight,
                backgroundColor: [
                    "#264653",
                    "#2a9d8f",
                    "#e9c46a",
                    "#f4a261",
                    "#e76f51",
                    "#E8D7FF",
                    "#FFD3E8",
                    "#FFD7D5",
                    "#F3FFE1",
                    "#DFFFD6",
                ],
                borderColor: ["#ffffff"],
                borderWidth: 1,
            },
        ],
    };
    const dataLine = {
        labels: name,
        datasets: [
            {
                label: "價錢",
                data: price,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                ],
                borderWidth: 1

            },
        ]
    };

    const dataPie = {
        labels: name,
        datasets: [
            {
                label: "材質",
                data: price,
                backgroundColor: [
                    "#264653",
                    "#2a9d8f",
                    "#e9c46a",
                    "#f4a261",
                    "#e76f51",
                    "#E8D7FF",
                    "#FFD3E8",
                    "#FFD7D5",
                    "#F3FFE1",
                    "#DFFFD6",
                ],
                borderColor: [
                    'rgb(255, 255, 255)',

                ],
                borderWidth: 1

            },

        ]
    };

    const dataPolar = {
        labels: name,
        datasets: [
            {
                label: "病例數",
                data: weight,
                backgroundColor: [
                    "#264653",
                    "#2a9d8f",
                    "#e9c46a",
                    "#f4a261",
                    "#e76f51",
                    "#E8D7FF",
                    "#FFD3E8",
                    "#FFD7D5",
                    "#F3FFE1",
                    "#DFFFD6",
                ],
                borderColor: [
                    'rgb(255, 255, 235)',
                ],
                borderWidth: 1

            },

        ]
    };

    const configBar = {
        type: 'bar',
        data: dataBar,
        options: {
            maintainAspectRatio: 1.6,
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 25
                        }
                    }
                }
            },
            scales: {
                y: { beginAtZero: true, }
            }
        },
    };

    const configLine = {
        type: 'line',
        data: dataLine,
        options: {
            maintainAspectRatio: 1.6,
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 25
                        }
                    }
                }
            },
            scales: {
                y: { beginAtZero: true, }
            }
        },
    };

    const configPie = {
        type: 'doughnut',
        data: dataPie,
        options: {
            maintainAspectRatio: 1.6,
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 25
                        }
                    }
                }
            },
            scales: {
                y: { beginAtZero: true, }
            }
        },
    };

    const configPolar = {
        type: 'polarArea',
        data: dataPolar,
        options: {
            maintainAspectRatio: 1.6,
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 25
                        }
                    }
                }
            },
            scales: {
                y: { beginAtZero: true, }
            }
        },
    };

    const barCt = new Chart(ctxBar, configBar);
    const linerCt = new Chart(ctxLine, configLine);
    const pieCt = new Chart(ctxPie, configPie);
    const polarCt = new Chart(ctxPolar, configPolar);
})

// //////////////main-text-chart/////////////////
// chart1
let ctx = document.getElementById("myChart");
const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const data = {
    labels: labels,
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor:
            [
                'rgba(255, 99, 132, 0.2)',
            ],
        borderColor:
            [
                'rgb(255, 99, 132)',
            ],
        borderWidth: 1
    }]
};
const config = {
    type: 'bar',
    data: data,
    options: {
        //水平圖表
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
};
const myChart = new Chart(ctx, config)


// chart2
let ctx2 = document.getElementById("myChart2");
const labels2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Sun"];
const data2 = {
    labels: labels2,
    datasets: [{
        label: 'Female',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor:
            [
                'rgba(255, 99, 132, 0.2)',
            ],
        borderColor:
            [
                'rgb(255, 99, 132)',
            ],
        borderWidth: 1
    }, {
        label: 'male',
        data: [60, 54, 77, 65, 50, 52, 48],
        backgroundColor:
            [
                'rgba(255, 159, 64, 0.2)',
            ],
        borderColor:
            [
                'rgb(255, 159, 64)',
            ],
        borderWidth: 1
    }]
};
const config2 = {
    type: 'bar',
    data: data2,
    options: {
        layout: {
            padding: {
                left: 10,
                right: 10
            }
        },
        //水平圖表
        indexAxis: 'x',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
};
const myChart2 = new Chart(ctx2, config2)
// chart3
let ctx3 = document.getElementById("myChart3");
const data3 = {
    labels: [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    },
    {
        label: 'My Second Dataset',
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
};
const config3 = {
    type: 'radar',
    data: data3,
    options: {
        scales: {
            r: {
                angleLines: {
                    color: 'red',
                },
                grid: {
                    color: 'red'
                },
                pointLabels: {
                    color: 'blue'
                },
            }
        },
        maintainAspectRatio: false,
        elements: {
            line: {
                borderWidth: 3
            }
        }
    },
};
const myChart3 = new Chart(ctx3, config3);

// /////////////////main-right-block////////////////////////////
// chart4
let ctx4 = document.getElementById("myChart4");
const data4 = {
    datasets: [{
        label: 'First Dataset',
        data: [{
            x: 20,
            y: 30,
            r: 15
        }, {
            x: 40,
            y: 10,
            r: 10
        }, {
            x: 30,
            y: 15,
            r: 6
        }],
        backgroundColor: 'rgb(255, 99, 132)'
    }]
};
const config4 = {
    type: 'bubble',
    data: data4,
    options: {
        maintainAspectRatio: false
    },
};
const myChart4 = new Chart(ctx4, config4);
// chart5
let ctx5 = document.getElementById("myChart5");
const data5 = {
    labels: [
        'January',
        'February',
        'March',
        'April'
    ],
    //混合圖表type寫在裡面
    datasets: [{
        type: 'bar',
        label: 'Bar Dataset',
        data: [10, 20, 30, 40],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)'
    }, {
        type: 'line',
        label: 'Line Dataset',
        data: [23, 12, 31, 50],
        fill: false,
        borderColor: 'rgb(54, 162, 235)'
    }]
};
const config5 = {
    type: 'scatter',
    data: data5,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
};
const myChart5 = new Chart(ctx5, config5);
// chart6
let ctx6 = document.getElementById("myChart6");
        const data6 = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Looping tension',
                data: [65, 59, 80, 81, 26, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
            }]
        };
        const config6 = {
            type: 'line',
            data: data,
            options: {
                animations: {
                    tension: {
                        duration: 1000,
                        easing: 'linear',
                        from: 1,
                        to: 0,
                        loop: true
                    }
                },
                scales: {
                    y: { // defining min and max so hiding the dataset does not change scale range
                        min: 0,
                        max: 100
                    }
                }
            }
        };
        const myChart6 = new Chart(ctx6, config6)


// ///////////////////互動功能底加/////////////////////////////

$(document).ready(function () {
    // 頂陶賣叮噹
    // console.log('報錯與狗不得進入')
    $(".line").click(function () {
        $('.main-center-container').addClass('none');
        $('#chart-line').removeClass("lineCt");
        $('#chart-pie').addClass('pieCt');
        $('#chart-bar').addClass("barCt");
        $('#chart-polar').addClass("polarCt");
    })
    $(".pie").click(function () {
        $('.main-center-container').addClass('none');
        $('#chart-pie').removeClass("pieCt");
        $('#chart-line').addClass("lineCt");
        $('#chart-bar').addClass("barCt");
        $('#chart-polar').addClass("polarCt");
    })
    $(".bar").click(function () {
        $('.main-center-container').addClass('none');
        $('#chart-bar').removeClass("barCt");
        $('#chart-line').addClass("lineCt");
        $('#chart-polar').addClass("polarCt");
        $('#chart-pie').addClass('pieCt');
    })
    $(".polarArea").click(function () {
        $('.main-center-container').addClass('none');
        $('#chart-polar').removeClass("polarCt");
        $('#chart-pie').addClass("pieCt");
        $('#chart-line').addClass("lineCt");
        $('#chart-bar').addClass("barCt");
    })

    $(document).keydown(function (event) {
        let keydown = document.querySelectorAll('.keydown')
        // 傳遞參數event中keyCode分別代表左右鍵
        switch (event.keyCode) {
            // 37代表左鍵
            case 37:
                $(keydown).finish().animate({
                    left: "-=104px"
                });
                break;
            // 39代表右鍵
            case 39:
                // alert("右鍵");
                $(keydown).finish().animate({
                    left: "+=104px"
                });
                break;
        }
    })

    $(document).scroll(function () {
        // console.log('00')
    })

    // 欸咖賣叮噹
})
window.onload = function () {
    // 頂陶賣叮噹
    // let keydowns = document.querySelectorAll('.keydown')
    // for (let i = 0; i < keydowns.length; i++) {
    //     console.log(keydowns[0])//OK
    //     keydowns[0].addEventListener('keydown', function (event) {
    //         console.log(event)//沒反應
    //         switch(event.keyCode){
    //             case 37:
    //                 // 37代表左鍵
    //                 for(let j = 0; j < keydowns.length; j++){
    //                     keydowns[j].classList.remove('active')
    //                 }
    //                 this.classList.add("active")
    //                 console.log(keydowns[i])
    //             case 39:
    //                 // 39代表右鍵
    //                 for(let j = 0; j < keydowns.length; j++){
    //                     keydowns[j].classList.remove('active')
    //                 }
    //                this.classList.add("active")
    //                 console.log(keydowns[i])
    //         }

    //         this.classList.add('active')
    //     })
    // }
    // 切換圖片
    let main = document.querySelector('#main-page')
    let pics = document.querySelectorAll('.pic-wrap');
    for (let i = 0; i < pics.length; i++) {
        pics[i].addEventListener('click', function () {
            for (let j = 0; j < pics.length; j++) {
                // 遍歷每個pics並拿掉class
                pics[j].classList.remove('active')
            }
            this.classList.add('active')
            main.childNodes[0].src = this.childNodes[0].src
        })
    }

    // 欸咖賣叮噹
}

