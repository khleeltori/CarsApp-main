import DefaultLayout from '../components/DefaultLayout'
import {Row,Col,Form,Input,DatePicker, Checkbox} from 'antd'
import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../redux/actions/carsActions';
import moment from 'moment'
import { bookCar } from '../redux/actions/bookingAction';
//Icons
import { TbEngine } from "react-icons/tb";
import { GiCarSeat } from "react-icons/gi";
import { LuFuel } from "react-icons/lu";
import { Divider } from 'antd';
import { json } from 'react-router-dom';
const {RangePicker} = DatePicker
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
  const [from,setFrom] = useState()
  const [to, setTo] = useState()
  const [totalHours, setTotalHours] = useState(0)
  const [driver,setDriver] = useState(false)
  const [totalAmount, setTotalAmount] = useState(0)
  useEffect(() => {
    setTotalAmount((totalHours * data.rentPerHour))
    if(driver)
    {
      setTotalAmount( totalAmount + (totalHours * 30))
    }
  },[driver, totalHours])


  function selectTimeSlots(values){
    setFrom(moment(values[0].format('MMM DD YYYY HH:mm')))
    setTo(moment(values[1].format('MMM DD YYYY HH:mm')))
    setTotalHours(values[1].diff(values[0] , 'hours'))
  }
  function BookNow() {
    const reqObj = {
      user : JSON.parse(localStorage.getItem('user'))._id,
      car : data._id,
      totalHours,
      totalAmount,
      driverRequire : driver,
      bookedTimeSlots : {
        from,
        to
      }
    }
    dispatchEvent(bookCar(reqObj))
  }
 
  return (
    <form>
      <DefaultLayout/>
      <TbEngine id = 'icons'/>
      <div className='containInfo'>
        <div className='column'> <img src={data.image360} className="bookImg"  /></div>
      </div>
      {/* <Col>
      <Divider type="horizontal" dashed >car Info</Divider>
      </Col> */}

      <div style={{textAlign:'right'}} id = 'divIcons'>
       
        <GiCarSeat id = 'icons'/>
        <LuFuel id = 'icons'/>
        <br/>
        <span id = 'pInfo'>{data.engine}</span>
        <span id = 'pInfo'>{data.seats}</span>
        <span id = 'pInfo'>{data.fuelType}</span>
      </div>
      <Divider type='horizontel' dashed >Select Time Slots</Divider>
      <RangePicker showTime={{format:'HH:mm'}} format='MMM DD YYYY HH:mm' onChange={selectTimeSlots} />
      <div style={{color:'#3498DB'}}>
      <p> Total Hours : <b>{totalHours}</b></p>
      <p>Rent Per Hour : <b>{data.rentPerHour}</b></p>
      <Checkbox style={{color:'#3498DB'}} onChange={(e)=>
      {
        if(e.target.checked )
        {
          setDriver(true);
        }
        else 
        {
          setDriver(false);
        }
        }}>Driver Required</Checkbox>

        <h3>Total Amount : {totalAmount}</h3>
        <button className='btn1' onClick={BookingCar} >Book Now</button>
      </div>
    </form>
  )
}

export default BookingCar