const initialData = {
    cars:[
        {
          id:"u8HpHHL9d3zU",
          name: "Tata Tiago",
          image:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Tiago/7338/Tata-Tiago-XE/1660901953609/front-left-side-47.jpg?impolicy=resize&imwidth=220",
          rentPerHour:300,
          fuelType:"Petrol",
          bookedTimeSlots:[],
          capacity:5
        },
        {
          id:"pP0pKFxQ5ywb",
          name: "Skoda Superb",
          image:"https://stimg.cardekho.com/images/carexteriorimages/360x240/Skoda/Skoda-Superb-2019/1548747385885/047.jpg?impolicy=resize&imwidth=220",
          rentPerHour:500,
          fuelType:"Petrol",
          bookedTimeSlots:[],
          capacity:4
        },
        {
          id:"1mKKOF8vjkDm",
          name: "Hyundai Verna",
          image:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Verna/8703/1679389180298/front-left-side-47.jpg?tr=w-456",
          rentPerHour:200,
          fuelType:"Petrol",
          bookedTimeSlots:[],
          capacity:4
        },
        {
          id:"xqpGtz7tAjkv",
          name: "Hyundai Aura",
          image:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Aura/9534/1678100114411/front-left-side-47.jpg?tr=w-456",
          rentPerHour:100,
          fuelType:"CNG",
          bookedTimeSlots:[],
          capacity:5
        },
        {
          id:"MD6k6uWeOBBL",
          name: "Audi A4",
          image:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/A4/9321/1670914111785/front-left-side-47.jpg?tr=w-456",
          rentPerHour:800,
          fuelType:"Petrol",
          bookedTimeSlots:[],
          capacity:5
        },
        {
          id:"YrZYqLJdxT7T",
          name: "Mercedes-Benz E-Class",
          image:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/E-Class/8407/1677305821069/front-left-side-47.jpg?tr=w-456",
          rentPerHour:100,
          fuelType:"Diesel",
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
