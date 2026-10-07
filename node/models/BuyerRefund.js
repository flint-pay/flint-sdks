import { d148 as c0, d180 as c1, d95 as c2, d45 as c3, d146 as c4, d77 as c5, d1999 as c6, d2000 as c7, d2001 as c8, d2003 as c9, d2041 as c10, d2112 as c11, d2115 as c12, d2117 as c13, d2119 as c14, d2122 as c15, d2124 as c16, d2127 as c17, d2129 as c18, d2319 as c19, d2327 as c20, d96 as c21, d776 as c22, d104 as c23, d147 as c24, d2121 as c25, d41 as c26, d227 as c27 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d148 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d148;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerRefund"]:c0(),["CategoryReference"]:c1(),["ExpandedCustomerSummary"]:c2(),["ExpandedOrderSummary"]:c3(),["ExpandedPaymentIntentSummary"]:c4(),["MoneyValue"]:c5(),["PaymentRefund"]:c6(),["PaymentSourceAchDebitSummary"]:c7(),["PaymentSourceCardSummary"]:c8(),["PaymentSourceSummary"]:c9(),["PricingAmounts"]:c10(),["RefundAdjustmentReason"]:c11(),["RefundGiftCardDestination"]:c12(),["RefundLineItemAdjustment"]:c13(),["RefundLineItemAdjustmentRefund"]:c14(),["RefundLineItemAllocation"]:c15(),["RefundLineItemModifierAllocation"]:c16(),["RefundTaxBreakdownRefund"]:c17(),["RefundTenderAllocation"]:c18(),["SelectedProductOption"]:c19(),["SettlementAmounts"]:c20(),["SharedCodec24"]:c21(),["SharedCodec251"]:c22(),["SharedCodec29"]:c23(),["SharedCodec46"]:c24(),["SharedCodec543"]:c25(),["SharedCodec6"]:c26(),["SignedMoney"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerRefund(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
