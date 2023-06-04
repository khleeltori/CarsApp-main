import DefaultLayout from '../components/DefaultLayout'
import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../redux/actions/carsActions';

//Icons
import { TbEngine } from "react-icons/tb";
import { GiCarSeat } from "react-icons/gi";
import { LuFuel } from "react-icons/lu";
function BookingCar({match}) {
  
  //Get Car ID By URL  

  const urlParams = new URLSearchParams(window.location.pathname);
  const decodedString = decodeURIComponent(urlParams);
  const idByURL = decodedString.split('/').pop().slice(0, -1);

  //Get Data From carsReducer That Handle All Cars Data
  const {cars} = useSelector(state=>state.carsReducer)
  const id = cars.map(item => item);

 // Get Car Data By ID
  const getCarDataByID = () => {
    const result = id.find(item => item.id === idByURL);
    return result ? result : null;
  };
  const data = getCarDataByID();

  
  

  // const {loading} = useSelector(state=>state.alertsReducer)
  // const [car , setcar] = useState({})
  // const dispatch = useDispatch()
 
  return (
    <form>
      <DefaultLayout/>
      <h1>Hi There</h1>
      <div className='containInfo'>
        <div className='column'> <img src={data.image360} className="bookImg"  /></div>
        <div className='column' > <p>hasdasdasdasdasdadasdasdasdasdasdasdsadasi</p> </div>
      </div>

      <div id = 'divIcons'>
        <TbEngine id = 'icons'/>
        <GiCarSeat id = 'icons'/>
        <LuFuel id = 'icons'/>
        <br/>
        <span id = 'pInfo'>{data.engine}</span>
        <span id = 'pInfo'>{data.seats}</span>
        <span id = 'pInfo'>{data.fuelType}</span>
      </div>

    </form>
  )
}

export default BookingCar
