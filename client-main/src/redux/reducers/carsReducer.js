const initialData = {
    cars:[
        {
          id:"u8HpHHL9d3zU",
          name: " Audia R5 Sport",
          image:"https://carsguide-res.cloudinary.com/image/upload/f_auto%2Cfl_lossy%2Cq_auto%2Ct_default/v1/editorial/2021-Audi-RS5-Sportback-coupe-1001x565.JPG",
          rentPerHour:570,
          fuelType:"Petrol",
          bookedTimeSlots:[],
          capacity:4
        },
        {
          id:"pP0pKFxQ5ywb",
          name: "Skoda Superb SportLine",
          image:"https://i.ytimg.com/vi/rwOb_EgjKso/maxresdefault.jpg",
          rentPerHour:280,
          fuelType:"Petrol",
          bookedTimeSlots:[],
          capacity:5
        },
        {
          id:"1mKKOF8vjkDm",
          name: "Hyundai Elntra",
          image:"https://s7d1.scene7.com/is/image/hyundai/2022-elantra?wid=1200&hei=630&qlt=85,0&fmt=webp",
          rentPerHour:150,
          fuelType:"Hy",
          bookedTimeSlots:[],
          capacity:5
        },
        {
          id:"xqpGtz7tAjkv",
          name: "Hyundai Aura",
          image:"https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/6ed6ebc7-37b6-4b63-9ded-565b7cc5f3bc/Range%20Rover%20%283%29.jpg",
          rentPerHour:4000,
          fuelType:"Petrol",
          bookedTimeSlots:[],
          capacity:5
        },
        {
          id:"MD6k6uWeOBBL",
          name: "Audi A4",
          image:"https://www.motortrend.com/uploads/2022/07/2022-Audi-A4-S-Line-front-three-quarter-2.jpg",
          rentPerHour:300,
          fuelType:"Petrol",
          bookedTimeSlots:[],
          capacity:5
        },
        {
          id:"YrZYqLJdxT7T",
          name: "Mercedes-Benz E-Class",
          image:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/E-Class/8407/1677305821069/front-left-side-47.jpg?tr=w-456",
          rentPerHour:370,
          fuelType:"petrol",
          bookedTimeSlots:[],
          capacity:4
        },
        {
      id:"YrZYqLJdxT7T",
      name: "Jeep Cherokee",
      image:"https://media.ed.edmunds-media.com/jeep/grand-cherokee-l/2022/oem/2022_jeep_grand-cherokee-l_4dr-suv_limited_fq_oem_1_600.jpg",
      rentPerHour:335,
      fuelType:"petrol",
      bookedTimeSlots:[],
      capacity:4
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
