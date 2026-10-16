import { d102 as c0, d136 as c1, d90 as c2, d42 as c3, d100 as c4, d323 as c5, d2013 as c6, d2014 as c7, d2015 as c8, d2017 as c9, d2056 as c10, d2127 as c11, d2130 as c12, d2132 as c13, d2134 as c14, d2136 as c15, d2137 as c16, d2138 as c17, d2141 as c18, d2143 as c19, d2334 as c20, d2340 as c21, d91 as c22, d92 as c23, d101 as c24, d753 as c25, d2034 as c26 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d102 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d102;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerRefund"]:c0(),["CategoryReference"]:c1(),["ExpandedCustomerSummary"]:c2(),["ExpandedOrderSummary"]:c3(),["ExpandedPaymentIntentSummary"]:c4(),["MoneyValue"]:c5(),["PaymentRefund"]:c6(),["PaymentSourceAchDebitSummary"]:c7(),["PaymentSourceCardSummary"]:c8(),["PaymentSourceSummary"]:c9(),["PricingAmounts"]:c10(),["RefundAdjustmentReason"]:c11(),["RefundGiftCardDestination"]:c12(),["RefundLineItemAdjustment"]:c13(),["RefundLineItemAdjustmentRefund"]:c14(),["RefundLineItemAllocation"]:c15(),["RefundLineItemAutomaticRefund"]:c16(),["RefundLineItemModifierAllocation"]:c17(),["RefundTaxBreakdownRefund"]:c18(),["RefundTenderAllocation"]:c19(),["SelectedProductOption"]:c20(),["SettlementAmounts"]:c21(),["SharedCodec16"]:c22(),["SharedCodec17"]:c23(),["SharedCodec18"]:c24(),["SharedCodec228"]:c25(),["SignedMoney"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerRefund(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
