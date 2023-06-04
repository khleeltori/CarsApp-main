const initialData = {
    cars:[
        {
          id:"u8HpHHL9d3zU",
          name: " 2014 Audi RS 5",
          engine:" 4.2-liter V8",
          image360:"https://vexgateway.fastly.carvana.io/executions/75993546/SPIN_VIDEO_FLOOR_CLEANER/output.gif?v=1682364533.093",
          image:"https://cloud.leparking.fr/2021/09/09/01/02/audi-a5-2014-audi-rs5-coupe-cars-trucks-london-kijiji-white_8266185774.jpg",
          rentPerHour:570,
          fuelType:"Petrol",
          bookedTimeSlots:[],
          seats:4
        },
        {
          id:"pP0pKFxQ5ywb",
          name: "bmw 5 series 2021",
          engine:" B58 I6 turbo",
          image360:"https://vexgateway.fastly.carvana.io/executions/75592861/SPIN_VIDEO_FLOOR_CLEANER/output.gif?v=1682008007.207",
          image:"https://cdnblob.fastly.carvana.io/2002152273/post-large/normalized/zoomcrop/2002152273-edc-02.jpg?v=2023.4.28_3.29.32",
          rentPerHour:380,
          fuelType:"Petrol",
          bookedTimeSlots:[],
          seats:5
        },
        {
          id:"1mKKOF8vjkDm",
          name: "Hyundai Elntra",
          image360:"https://vexgateway.fastly.carvana.io/executions/41122329/SPIN_VIDEO_FLOOR_CLEANER/output.gif?v=1655147063.057",
          image:"https://s7d1.scene7.com/is/image/hyundai/2022-elantra?wid=1200&hei=630&qlt=85,0&fmt=webp",
          rentPerHour:150,
          fuelType:"Hy",
          bookedTimeSlots:[],
          seats:5
        },
        {
          id:"xqpGtz7tAjkv",
          name: "Lexus IS 2017",
          engine:" 3.5-liter V6 ",
          image360:"https://vexgateway.fastly.carvana.io/executions/74288298/SPIN_VIDEO_FLOOR_CLEANER/output.gif?v=1680879816.217",
          image:"https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/2017_lexus_is_300h_dynamic_12_0.jpg",
          rentPerHour:4000,
          fuelType:"Petrol",
          bookedTimeSlots:[],
          seats:5
        },
        {
          id:"MD6k6uWeOBBL",
          name: "chevrolet camaro 2018",
          engine:"6.2L LT1 V8",
          image360:"https://vexgateway.fastly.carvana.io/executions/70424061/SPIN_VIDEO_FLOOR_CLEANER/output.gif?v=1677693341.039",
          image:"https://vexgateway.fastly.carvana.io/2002337405/hero-no-letters.jpg",
          rentPerHour:300,
          fuelType:"Petrol",
          bookedTimeSlots:[],
          seats:5
        },
        {
          id:"YrZYqLJdxT7T",
          name: "Mercedes-Benz E-Class",
          engine:"3.0L V6 biturbo",
          image360:"https://vexgateway.fastly.carvana.io/executions/64540273/SPIN_VIDEO_FLOOR_CLEANER/output.gif?v=1670616864.614",
          image:"https://cdnblob.fastly.carvana.io/2002289759/post-large/normalized/zoomcrop/2002289759-edc-02.jpg",
          rentPerHour:370,
          fuelType:"petrol",
          bookedTimeSlots:[],
          seats:4
        },
        {
      id:"YrZYqLJdxT7T2",
      name: "Jeep Cherokee",
      engine:"3.6-liter V6",
      image360:"https://vexgateway.fastly.carvana.io/executions/51988183/SPIN_VIDEO_FLOOR_CLEANER/output.gif?v=1660664972.701",
      image:"https://cdnblob.fastly.carvana.io/2002359898/post-large/normalized/zoomcrop/2002359898-edc-02.jpg",
      rentPerHour:335,
      fuelType:"petrol",
      bookedTimeSlots:[],
      seats:5
        },
    ]
};

export const carsReducer = (state=initialData , action) =>{
    switch (action) 
    {

        case 'GET_ALL-CARS' : {
            return{
                ...state,
                cars : action.payload
            }
        }

        default: return state
    }
}
