import { d143 as c0, d175 as c1, d90 as c2, d45 as c3, d141 as c4, d77 as c5, d1993 as c6, d1994 as c7, d1995 as c8, d1997 as c9, d2035 as c10, d2106 as c11, d2109 as c12, d2111 as c13, d2113 as c14, d2116 as c15, d2118 as c16, d2121 as c17, d2123 as c18, d2313 as c19, d2321 as c20, d91 as c21, d770 as c22, d99 as c23, d142 as c24, d2115 as c25, d41 as c26, d226 as c27 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d143 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d143;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerRefund"]:c0(),["CategoryReference"]:c1(),["ExpandedCustomerSummary"]:c2(),["ExpandedOrderSummary"]:c3(),["ExpandedPaymentIntentSummary"]:c4(),["MoneyValue"]:c5(),["PaymentRefund"]:c6(),["PaymentSourceAchDebitSummary"]:c7(),["PaymentSourceCardSummary"]:c8(),["PaymentSourceSummary"]:c9(),["PricingAmounts"]:c10(),["RefundAdjustmentReason"]:c11(),["RefundGiftCardDestination"]:c12(),["RefundLineItemAdjustment"]:c13(),["RefundLineItemAdjustmentRefund"]:c14(),["RefundLineItemAllocation"]:c15(),["RefundLineItemModifierAllocation"]:c16(),["RefundTaxBreakdownRefund"]:c17(),["RefundTenderAllocation"]:c18(),["SelectedProductOption"]:c19(),["SettlementAmounts"]:c20(),["SharedCodec22"]:c21(),["SharedCodec247"]:c22(),["SharedCodec27"]:c23(),["SharedCodec44"]:c24(),["SharedCodec539"]:c25(),["SharedCodec6"]:c26(),["SignedMoney"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerRefund(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
