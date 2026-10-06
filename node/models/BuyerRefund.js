import { d140 as c0, d172 as c1, d90 as c2, d45 as c3, d138 as c4, d77 as c5, d1966 as c6, d1967 as c7, d1968 as c8, d1970 as c9, d2008 as c10, d2079 as c11, d2082 as c12, d2084 as c13, d2086 as c14, d2089 as c15, d2091 as c16, d2094 as c17, d2096 as c18, d2286 as c19, d2294 as c20, d91 as c21, d761 as c22, d99 as c23, d139 as c24, d2088 as c25, d41 as c26, d223 as c27 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d140 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d140;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerRefund"]:c0(),["CategoryReference"]:c1(),["ExpandedCustomerSummary"]:c2(),["ExpandedOrderSummary"]:c3(),["ExpandedPaymentIntentSummary"]:c4(),["MoneyValue"]:c5(),["PaymentRefund"]:c6(),["PaymentSourceAchDebitSummary"]:c7(),["PaymentSourceCardSummary"]:c8(),["PaymentSourceSummary"]:c9(),["PricingAmounts"]:c10(),["RefundAdjustmentReason"]:c11(),["RefundGiftCardDestination"]:c12(),["RefundLineItemAdjustment"]:c13(),["RefundLineItemAdjustmentRefund"]:c14(),["RefundLineItemAllocation"]:c15(),["RefundLineItemModifierAllocation"]:c16(),["RefundTaxBreakdownRefund"]:c17(),["RefundTenderAllocation"]:c18(),["SelectedProductOption"]:c19(),["SettlementAmounts"]:c20(),["SharedCodec22"]:c21(),["SharedCodec246"]:c22(),["SharedCodec27"]:c23(),["SharedCodec44"]:c24(),["SharedCodec536"]:c25(),["SharedCodec6"]:c26(),["SignedMoney"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerRefund(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
