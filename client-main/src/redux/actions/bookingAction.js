import axios from './../../configration/axiosInstance';
import { message } from 'antd'

export const bookCar = (reqObj) => async dispatch => {

    dispatch({ type: 'LOADING', payload: true })

    try {
        await axios.get('/bookings/bookcar')
        // dispatch({type:'GET_ALL_CARS', payload:response.data})
        dispatch({ type: 'LOADING', payload: false })
        message.success('Your car booked Successfully')
    } catch (error) {
        console.log(error);
        dispatch({ type: 'LOADING', payload: false })
        message.error('Something went Wrong , please try later')
    }

}