import { d102 as c0, d136 as c1, d90 as c2, d42 as c3, d100 as c4, d323 as c5, d1996 as c6, d1997 as c7, d1998 as c8, d2000 as c9, d2039 as c10, d2110 as c11, d2113 as c12, d2115 as c13, d2117 as c14, d2119 as c15, d2120 as c16, d2121 as c17, d2124 as c18, d2126 as c19, d2318 as c20, d2324 as c21, d91 as c22, d92 as c23, d101 as c24, d743 as c25, d2017 as c26 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d102 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d102;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerRefund"]:c0(),["CategoryReference"]:c1(),["ExpandedCustomerSummary"]:c2(),["ExpandedOrderSummary"]:c3(),["ExpandedPaymentIntentSummary"]:c4(),["MoneyValue"]:c5(),["PaymentRefund"]:c6(),["PaymentSourceAchDebitSummary"]:c7(),["PaymentSourceCardSummary"]:c8(),["PaymentSourceSummary"]:c9(),["PricingAmounts"]:c10(),["RefundAdjustmentReason"]:c11(),["RefundGiftCardDestination"]:c12(),["RefundLineItemAdjustment"]:c13(),["RefundLineItemAdjustmentRefund"]:c14(),["RefundLineItemAllocation"]:c15(),["RefundLineItemAutomaticRefund"]:c16(),["RefundLineItemModifierAllocation"]:c17(),["RefundTaxBreakdownRefund"]:c18(),["RefundTenderAllocation"]:c19(),["SelectedProductOption"]:c20(),["SettlementAmounts"]:c21(),["SharedCodec16"]:c22(),["SharedCodec17"]:c23(),["SharedCodec18"]:c24(),["SharedCodec222"]:c25(),["SignedMoney"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerRefund(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
