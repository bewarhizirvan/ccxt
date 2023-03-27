// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

interface Exchange {
     publicGetOrderbook? (params?: {}): Promise<implicitReturnType>;
     publicGetTrades? (params?: {}): Promise<implicitReturnType>;
     publicGetTicker? (params?: {}): Promise<implicitReturnType>;
     privatePostAccountDepositAddress? (params?: {}): Promise<implicitReturnType>;
     privatePostAccountBtcDepositAddress? (params?: {}): Promise<implicitReturnType>;
     privatePostAccountBalance? (params?: {}): Promise<implicitReturnType>;
     privatePostAccountDailyBalance? (params?: {}): Promise<implicitReturnType>;
     privatePostAccountUserInfo? (params?: {}): Promise<implicitReturnType>;
     privatePostAccountVirtualAccount? (params?: {}): Promise<implicitReturnType>;
     privatePostOrderCancelAll? (params?: {}): Promise<implicitReturnType>;
     privatePostOrderCancel? (params?: {}): Promise<implicitReturnType>;
     privatePostOrderLimitBuy? (params?: {}): Promise<implicitReturnType>;
     privatePostOrderLimitSell? (params?: {}): Promise<implicitReturnType>;
     privatePostOrderCompleteOrders? (params?: {}): Promise<implicitReturnType>;
     privatePostOrderLimitOrders? (params?: {}): Promise<implicitReturnType>;
     privatePostOrderOrderInfo? (params?: {}): Promise<implicitReturnType>;
     privatePostTransactionAuthNumber? (params?: {}): Promise<implicitReturnType>;
     privatePostTransactionHistory? (params?: {}): Promise<implicitReturnType>;
     privatePostTransactionKrwHistory? (params?: {}): Promise<implicitReturnType>;
     privatePostTransactionBtc? (params?: {}): Promise<implicitReturnType>;
     privatePostTransactionCoin? (params?: {}): Promise<implicitReturnType>;
}
abstract class Exchange extends _Exchange {}

export default Exchange