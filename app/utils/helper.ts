import axios from 'axios';
import { SWAPURL, OnCHAINTRADEURL } from './constants';

const headers = {"x-api-key": process.env.NEXT_PUBLIC_API_KEY!};
const headersURL = {"x-api-key": process.env.NEXT_LOGO_URL_API_KEY!}

export const fetchTotalVolume = async () => {
    try {
        const response = await axios.get(`${OnCHAINTRADEURL}/transaction/volume2`);//Swap Total Volume
        console.log("SwapVolume%%%%%%%%%%%%%%%%%% ", response);
        return response.data;
    } catch (error) {
        console.error('Error in fetchTotalVolume:', error);
        throw error;
    }
}

export const fetchTradeTotalVolume = async () => {
    try {
        const response = await axios.get(`${OnCHAINTRADEURL}/trade/volume2`);//Trade Total Volume
        console.log("TadeVolume%%%%%%%%%%%%%%%%%% ", response);
        return response.data;
    } catch (error) {
        console.error('Error in fetchTotalVolume:', error);
        throw error;
    }
}



export const fetchTradeTotalCount = async () => {
    try {
        const response = await axios.get(`${OnCHAINTRADEURL}/trade/count`);//Trade Total Count
        return response.data;
    } catch (error) {
        console.error('Error in fetchTotalCount:', error);
        throw error;
    }
}

export const fetchswapTotalCount = async () => {
    try {
        const response = await axios.get(`${SWAPURL}/referral/fetchDashboardSwap`);//Swap solana Total Count
        console.log("Swap Solana Total Count &&&&&&& ", response);
        return response.data;
    } catch (error) {
        console.error('Error in swapDashboard:', error);
        throw error;
    }
}

export const fetchToptradingPairs = async () => {
    try {
        const response = await axios.get(`https://referrals-dev.kanalabs.io/stats/fetchTradingPair`,{ headers: headers });//Top trading Pairs
        console.log("TopTrading Pairs ????????????????", response);
        return response.data;
    } catch (error) {
        console.error('Error in fetchTradingPair:', error);
        throw error;
    }
}

export const fetchOnchainSwapTotalCount = async () => {
    try {
        const response = await axios.get(`${OnCHAINTRADEURL}/transaction/count`);//Swap solana (onchain) Total Count
        console.log("OnchainSwapTotal Count %%%%%%%%% ", response);
        return response.data;
    } catch (error) {
        console.error('Error in swapDashboard:', error);
        throw error;
    }
}

export const fetchSwapTotalCount = async () => {
    try {
        const response = await axios.get(`https://stats.kanalabs.io/user/count`);//Swap Total Count
        console.log("SwapTotal Count %%%%%%%%% ", response);
        return response.data;
    } catch (error) {
        console.error('Error in swapDashboard:', error);
        throw error;
    }
}

// export const swapTradingPairs = async () => {
//     try {
//         const response = await axios.get(`https://referrals-dev.kanalabs.io/stats/fetchTradingPair`);
//         console.log("fetchTradingPair************************ ", response);
//         return response.data;
//     } catch (error) {
//         console.error('Error in swapDashboard:', error);
//         throw error;
//     }
// }

// Total Active wallets for Trade
export const fetchTradeActiveWallet = async () => {
    try {
        const response = await axios.get(`${OnCHAINTRADEURL}/trade/totalActiveWallets`);
        console.log("TradeActiveWallet@@@@@@@@@@@@@@@@@@@@: ", response);
        return response.data;
    } catch (error) {
        console.error('Error in fetchTotalCount:', error);
        throw error;
    }
}

export const fetchTokenURL = async () => {
    try {
        const response = await axios.get(`https://utils.kanalabs.io/tokenList?chain=11`,{headers:headersURL});
        console.log("TradeActiveWallet@@@@@@@@@@@@@@@@@@@@: ", response);
        return response.data;
    } catch (error) {
        console.error('Error in fetchTotalCount:', error);
        throw error;
    }
}

export const fetchReportByDateRange = async (requestData: any) => {
    try {
        const response = await axios.post(`${SWAPURL}/dashboard/admin/transactionHistory`, requestData);
        if (response.status !== 200 || response.data.error) {
            console.error('Error in fetchReportByDateRange:', response.data.error);
            return null;
        }
        return response.data;
    } catch (error) {
        console.error('Error in fetchReportByDateRange:', error);
        throw error;
    }
}

export const fetchChainPopularity = async () => {
    try {
        const response = await axios.get(`${OnCHAINTRADEURL}/transaction/getOriginAndDestinationVolume`);
        console.log("Chain Popularity%%%%%%%%%: ", response);
        return response.data;
    } catch (error) {
        console.error('Error in fetchTotalVolume:', error);
        throw error;
    }
}
