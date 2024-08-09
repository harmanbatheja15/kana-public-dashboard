import { StateSlice, Store } from "../types";

export type AppSlice = {
    isSelected : any;
    loading:true;
    tradeData:any;
    tradeCount:any;
    isTradeTotalVolume:any;
    isTradeActiveWallets:any;
    swapTotalCount:any;
    onchainTotalCount:any;
    overallOptions:any
    updateIsSelected(payload:any):void;
    setLoading(payload:any):void;
    setTradeData(payload:any):void;
    setTradeCount(payload:any):void;
    setIsTradeTotalVolume(payload:any):void;
    setIsTradeActiveWallets(payload:any):void;
    updateSwapTotalCount(payload:any):void;
    updateOnchainTotalCount(payload:any):void;
    setOverallOptions(payload:any):void;
};

export const createAppSlice: StateSlice<Store, AppSlice> = (set) => ({
    isSelected:'This Week',
    loading: true,
    tradeData: null,
    tradeCount: null,
    isTradeTotalVolume:null,
    isTradeActiveWallets:null,
    swapTotalCount:null,
    onchainTotalCount:null,
    overallOptions:'Overall',
    updateIsSelected(payload: AppSlice['isSelected']) {
        set({ isSelected: payload });
      },
      setLoading(payload:AppSlice['loading']){
        set({ loading: payload });
      },
      setTradeData(payload:AppSlice['tradeData']){
        set({ tradeData: payload });
      },
      setTradeCount(payload:AppSlice['tradeCount']){
        set({ tradeCount: payload });
      },
      setIsTradeTotalVolume(payload : AppSlice['isTradeTotalVolume']){
        set ({isTradeTotalVolume:payload});
      },
      setIsTradeActiveWallets(payload : AppSlice['isTradeActiveWallets']){
        set({isTradeActiveWallets:payload});
      },
      updateSwapTotalCount(payload : AppSlice['swapTotalCount']){
        set({swapTotalCount:payload});
      },
      updateOnchainTotalCount(payload : AppSlice['onchainTotalCount']){
        set({onchainTotalCount:payload});
      },
      setOverallOptions(payload : AppSlice['overallOptions']){
        set({overallOptions:payload});
      },
});
