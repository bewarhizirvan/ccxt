// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

interface Exchange {
     contractPublicGetPing? (params?: {}): Promise<implicitReturnType>;
     contractPublicGetDetail? (params?: {}): Promise<implicitReturnType>;
     contractPublicGetSupportCurrencies? (params?: {}): Promise<implicitReturnType>;
     contractPublicGetDepthSymbol? (params?: {}): Promise<implicitReturnType>;
     contractPublicGetDepthCommitsSymbolLimit? (params?: {}): Promise<implicitReturnType>;
     contractPublicGetIndexPriceSymbol? (params?: {}): Promise<implicitReturnType>;
     contractPublicGetFairPriceSymbol? (params?: {}): Promise<implicitReturnType>;
     contractPublicGetFundingRateSymbol? (params?: {}): Promise<implicitReturnType>;
     contractPublicGetKlineSymbol? (params?: {}): Promise<implicitReturnType>;
     contractPublicGetKlineIndexPriceSymbol? (params?: {}): Promise<implicitReturnType>;
     contractPublicGetKlineFairPriceSymbol? (params?: {}): Promise<implicitReturnType>;
     contractPublicGetDealsSymbol? (params?: {}): Promise<implicitReturnType>;
     contractPublicGetTicker? (params?: {}): Promise<implicitReturnType>;
     contractPublicGetRiskReverse? (params?: {}): Promise<implicitReturnType>;
     contractPublicGetRiskReverseHistory? (params?: {}): Promise<implicitReturnType>;
     contractPublicGetFundingRateHistory? (params?: {}): Promise<implicitReturnType>;
     contractPrivateGetAccountAssets? (params?: {}): Promise<implicitReturnType>;
     contractPrivateGetAccountAssetCurrency? (params?: {}): Promise<implicitReturnType>;
     contractPrivateGetAccountTransferRecord? (params?: {}): Promise<implicitReturnType>;
     contractPrivateGetPositionListHistoryPositions? (params?: {}): Promise<implicitReturnType>;
     contractPrivateGetPositionOpenPositions? (params?: {}): Promise<implicitReturnType>;
     contractPrivateGetPositionFundingRecords? (params?: {}): Promise<implicitReturnType>;
     contractPrivateGetPositionPositionMode? (params?: {}): Promise<implicitReturnType>;
     contractPrivateGetOrderListOpenOrdersSymbol? (params?: {}): Promise<implicitReturnType>;
     contractPrivateGetOrderListHistoryOrders? (params?: {}): Promise<implicitReturnType>;
     contractPrivateGetOrderExternalSymbolExternalOid? (params?: {}): Promise<implicitReturnType>;
     contractPrivateGetOrderGetOrderId? (params?: {}): Promise<implicitReturnType>;
     contractPrivateGetOrderBatchQuery? (params?: {}): Promise<implicitReturnType>;
     contractPrivateGetOrderDealDetailsOrderId? (params?: {}): Promise<implicitReturnType>;
     contractPrivateGetOrderListOrderDeals? (params?: {}): Promise<implicitReturnType>;
     contractPrivateGetPlanorderListOrders? (params?: {}): Promise<implicitReturnType>;
     contractPrivateGetStoporderListOrders? (params?: {}): Promise<implicitReturnType>;
     contractPrivateGetStoporderOrderDetailsStopOrderId? (params?: {}): Promise<implicitReturnType>;
     contractPrivateGetAccountRiskLimit? (params?: {}): Promise<implicitReturnType>;
     contractPrivateGetAccountTieredFeeRate? (params?: {}): Promise<implicitReturnType>;
     contractPrivatePostPositionChangeMargin? (params?: {}): Promise<implicitReturnType>;
     contractPrivatePostPositionChangeLeverage? (params?: {}): Promise<implicitReturnType>;
     contractPrivatePostPositionChangePositionMode? (params?: {}): Promise<implicitReturnType>;
     contractPrivatePostOrderSubmit? (params?: {}): Promise<implicitReturnType>;
     contractPrivatePostOrderSubmitBatch? (params?: {}): Promise<implicitReturnType>;
     contractPrivatePostOrderCancel? (params?: {}): Promise<implicitReturnType>;
     contractPrivatePostOrderCancelWithExternal? (params?: {}): Promise<implicitReturnType>;
     contractPrivatePostOrderCancelAll? (params?: {}): Promise<implicitReturnType>;
     contractPrivatePostAccountChangeRiskLevel? (params?: {}): Promise<implicitReturnType>;
     contractPrivatePostPlanorderPlace? (params?: {}): Promise<implicitReturnType>;
     contractPrivatePostPlanorderCancel? (params?: {}): Promise<implicitReturnType>;
     contractPrivatePostPlanorderCancelAll? (params?: {}): Promise<implicitReturnType>;
     contractPrivatePostStoporderCancel? (params?: {}): Promise<implicitReturnType>;
     contractPrivatePostStoporderCancelAll? (params?: {}): Promise<implicitReturnType>;
     contractPrivatePostStoporderChangePrice? (params?: {}): Promise<implicitReturnType>;
     contractPrivatePostStoporderChangePlanPrice? (params?: {}): Promise<implicitReturnType>;
     spotPublicGetMarketSymbols? (params?: {}): Promise<implicitReturnType>;
     spotPublicGetMarketCoinList? (params?: {}): Promise<implicitReturnType>;
     spotPublicGetCommonTimestamp? (params?: {}): Promise<implicitReturnType>;
     spotPublicGetCommonPing? (params?: {}): Promise<implicitReturnType>;
     spotPublicGetMarketTicker? (params?: {}): Promise<implicitReturnType>;
     spotPublicGetMarketDepth? (params?: {}): Promise<implicitReturnType>;
     spotPublicGetMarketDeals? (params?: {}): Promise<implicitReturnType>;
     spotPublicGetMarketKline? (params?: {}): Promise<implicitReturnType>;
     spotPublicGetMarketApiDefaultSymbols? (params?: {}): Promise<implicitReturnType>;
     spotPrivateGetAccountInfo? (params?: {}): Promise<implicitReturnType>;
     spotPrivateGetOrderOpenOrders? (params?: {}): Promise<implicitReturnType>;
     spotPrivateGetOrderList? (params?: {}): Promise<implicitReturnType>;
     spotPrivateGetOrderQuery? (params?: {}): Promise<implicitReturnType>;
     spotPrivateGetOrderDeals? (params?: {}): Promise<implicitReturnType>;
     spotPrivateGetOrderDealDetail? (params?: {}): Promise<implicitReturnType>;
     spotPrivateGetAssetDepositAddressList? (params?: {}): Promise<implicitReturnType>;
     spotPrivateGetAssetDepositList? (params?: {}): Promise<implicitReturnType>;
     spotPrivateGetAssetAddressList? (params?: {}): Promise<implicitReturnType>;
     spotPrivateGetAssetWithdrawList? (params?: {}): Promise<implicitReturnType>;
     spotPrivateGetAssetInternalTransferRecord? (params?: {}): Promise<implicitReturnType>;
     spotPrivateGetAccountBalance? (params?: {}): Promise<implicitReturnType>;
     spotPrivateGetAssetInternalTransferInfo? (params?: {}): Promise<implicitReturnType>;
     spotPrivateGetMarketApiSymbols? (params?: {}): Promise<implicitReturnType>;
     spotPrivatePostOrderPlace? (params?: {}): Promise<implicitReturnType>;
     spotPrivatePostOrderPlaceBatch? (params?: {}): Promise<implicitReturnType>;
     spotPrivatePostAssetWithdraw? (params?: {}): Promise<implicitReturnType>;
     spotPrivatePostAssetInternalTransfer? (params?: {}): Promise<implicitReturnType>;
     spotPrivateDeleteOrderCancel? (params?: {}): Promise<implicitReturnType>;
     spotPrivateDeleteOrderCancelBySymbol? (params?: {}): Promise<implicitReturnType>;
     spotPrivateDeleteAssetWithdraw? (params?: {}): Promise<implicitReturnType>;
}
abstract class Exchange extends _Exchange {}

export default Exchange