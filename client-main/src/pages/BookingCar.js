import DefaultLayout from '../components/DefaultLayout'
import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../redux/actions/carsActions';
function BookingCar({match}) {
  const {cars} = useSelector(state=>state.carsReducer)
  const {loading} = useSelector(state=>state.alertsReducer)
  const [car , setcar] = useState({})
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(getAllCars())
    if(cars.length>0)
    {
      setcar(cars.find(o=>o._id==match.params.carid))
    }
  },[])
  return (
    <DefaultLayout>
      <h1>BookingCar</h1>
      <h1>car id = {match.params.car_id} </h1>
    </DefaultLayout>
  )
}

export default BookingCar