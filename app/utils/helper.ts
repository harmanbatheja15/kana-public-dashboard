import axios from 'axios';
import { SWAPURL } from './constants';
import { OnCHAINTRADEURL } from './constants';


export const fetchTotalVolume = async () => {
    try {
        const response = await axios.get(`${OnCHAINTRADEURL}/transaction/volume2`);
        console.log("TadeVolume%%%%%%%%%%%%%%%%%% ", response);
        return response.data;
    } catch (error) {
        console.error('Error in fetchTotalVolume:', error);
        throw error;
    }
}

export const fetchTotalCount = async () => {
    try {
        const response = await axios.get(`${OnCHAINTRADEURL}/trade/count`);
        return response.data;
    } catch (error) {
        console.error('Error in fetchTotalCount:', error);
        throw error;
    }
}

export const swapDashboard = async () => {
    try {
        const response = await axios.get(`${SWAPURL}/referral/fetchDashboardSwap`);
        console.log("response************************ ", response);
        return response.data;
    } catch (error) {
        console.error('Error in swapDashboard:', error);
        throw error;
    }
}