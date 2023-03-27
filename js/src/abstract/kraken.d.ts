import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';
interface Exchange {
    zendeskGet360000292886(params?: {}): Promise<implicitReturnType>;
    zendeskGet201893608(params?: {}): Promise<implicitReturnType>;
    publicGetAssets(params?: {}): Promise<implicitReturnType>;
    publicGetAssetPairs(params?: {}): Promise<implicitReturnType>;
    publicGetDepth(params?: {}): Promise<implicitReturnType>;
    publicGetOHLC(params?: {}): Promise<implicitReturnType>;
    publicGetSpread(params?: {}): Promise<implicitReturnType>;
    publicGetTicker(params?: {}): Promise<implicitReturnType>;
    publicGetTime(params?: {}): Promise<implicitReturnType>;
    publicGetTrades(params?: {}): Promise<implicitReturnType>;
    privatePostAddOrder(params?: {}): Promise<implicitReturnType>;
    privatePostAddOrderBatch(params?: {}): Promise<implicitReturnType>;
    privatePostAddExport(params?: {}): Promise<implicitReturnType>;
    privatePostBalance(params?: {}): Promise<implicitReturnType>;
    privatePostCancelAll(params?: {}): Promise<implicitReturnType>;
    privatePostCancelOrder(params?: {}): Promise<implicitReturnType>;
    privatePostCancelOrderBatch(params?: {}): Promise<implicitReturnType>;
    privatePostClosedOrders(params?: {}): Promise<implicitReturnType>;
    privatePostDepositAddresses(params?: {}): Promise<implicitReturnType>;
    privatePostDepositMethods(params?: {}): Promise<implicitReturnType>;
    privatePostDepositStatus(params?: {}): Promise<implicitReturnType>;
    privatePostEditOrder(params?: {}): Promise<implicitReturnType>;
    privatePostExportStatus(params?: {}): Promise<implicitReturnType>;
    privatePostGetWebSocketsToken(params?: {}): Promise<implicitReturnType>;
    privatePostLedgers(params?: {}): Promise<implicitReturnType>;
    privatePostOpenOrders(params?: {}): Promise<implicitReturnType>;
    privatePostOpenPositions(params?: {}): Promise<implicitReturnType>;
    privatePostQueryLedgers(params?: {}): Promise<implicitReturnType>;
    privatePostQueryOrders(params?: {}): Promise<implicitReturnType>;
    privatePostQueryTrades(params?: {}): Promise<implicitReturnType>;
    privatePostRetrieveExport(params?: {}): Promise<implicitReturnType>;
    privatePostRemoveExport(params?: {}): Promise<implicitReturnType>;
    privatePostTradeBalance(params?: {}): Promise<implicitReturnType>;
    privatePostTradesHistory(params?: {}): Promise<implicitReturnType>;
    privatePostTradeVolume(params?: {}): Promise<implicitReturnType>;
    privatePostWithdraw(params?: {}): Promise<implicitReturnType>;
    privatePostWithdrawCancel(params?: {}): Promise<implicitReturnType>;
    privatePostWithdrawInfo(params?: {}): Promise<implicitReturnType>;
    privatePostWithdrawStatus(params?: {}): Promise<implicitReturnType>;
    privatePostStake(params?: {}): Promise<implicitReturnType>;
    privatePostUnstake(params?: {}): Promise<implicitReturnType>;
    privatePostStakingAssets(params?: {}): Promise<implicitReturnType>;
    privatePostStakingPending(params?: {}): Promise<implicitReturnType>;
    privatePostStakingTransactions(params?: {}): Promise<implicitReturnType>;
}
declare abstract class Exchange extends _Exchange {
}
export default Exchange;
