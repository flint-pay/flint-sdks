import { d102 as c0, d135 as c1, d90 as c2, d42 as c3, d100 as c4, d314 as c5, d1949 as c6, d1950 as c7, d1951 as c8, d1953 as c9, d1992 as c10, d2061 as c11, d2064 as c12, d2066 as c13, d2068 as c14, d2070 as c15, d2071 as c16, d2072 as c17, d2075 as c18, d2077 as c19, d2268 as c20, d2274 as c21, d91 as c22, d92 as c23, d101 as c24, d722 as c25, d1970 as c26 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d102 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d102;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerRefund"]:c0(),["CategoryReference"]:c1(),["ExpandedCustomerSummary"]:c2(),["ExpandedOrderSummary"]:c3(),["ExpandedPaymentIntentSummary"]:c4(),["MoneyValue"]:c5(),["PaymentRefund"]:c6(),["PaymentSourceAchDebitSummary"]:c7(),["PaymentSourceCardSummary"]:c8(),["PaymentSourceSummary"]:c9(),["PricingAmounts"]:c10(),["RefundAdjustmentReason"]:c11(),["RefundGiftCardDestination"]:c12(),["RefundLineItemAdjustment"]:c13(),["RefundLineItemAdjustmentRefund"]:c14(),["RefundLineItemAllocation"]:c15(),["RefundLineItemAutomaticRefund"]:c16(),["RefundLineItemModifierAllocation"]:c17(),["RefundTaxBreakdownRefund"]:c18(),["RefundTenderAllocation"]:c19(),["SelectedProductOption"]:c20(),["SettlementAmounts"]:c21(),["SharedCodec16"]:c22(),["SharedCodec17"]:c23(),["SharedCodec18"]:c24(),["SharedCodec213"]:c25(),["SignedMoney"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerRefund(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
