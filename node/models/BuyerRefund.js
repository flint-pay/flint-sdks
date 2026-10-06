import { d144 as c0, d176 as c1, d90 as c2, d45 as c3, d142 as c4, d77 as c5, d1992 as c6, d1993 as c7, d1994 as c8, d1996 as c9, d2034 as c10, d2105 as c11, d2108 as c12, d2110 as c13, d2112 as c14, d2115 as c15, d2117 as c16, d2120 as c17, d2122 as c18, d2312 as c19, d2320 as c20, d91 as c21, d770 as c22, d99 as c23, d143 as c24, d2114 as c25, d41 as c26, d226 as c27 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d144 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d144;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerRefund"]:c0(),["CategoryReference"]:c1(),["ExpandedCustomerSummary"]:c2(),["ExpandedOrderSummary"]:c3(),["ExpandedPaymentIntentSummary"]:c4(),["MoneyValue"]:c5(),["PaymentRefund"]:c6(),["PaymentSourceAchDebitSummary"]:c7(),["PaymentSourceCardSummary"]:c8(),["PaymentSourceSummary"]:c9(),["PricingAmounts"]:c10(),["RefundAdjustmentReason"]:c11(),["RefundGiftCardDestination"]:c12(),["RefundLineItemAdjustment"]:c13(),["RefundLineItemAdjustmentRefund"]:c14(),["RefundLineItemAllocation"]:c15(),["RefundLineItemModifierAllocation"]:c16(),["RefundTaxBreakdownRefund"]:c17(),["RefundTenderAllocation"]:c18(),["SelectedProductOption"]:c19(),["SettlementAmounts"]:c20(),["SharedCodec22"]:c21(),["SharedCodec247"]:c22(),["SharedCodec27"]:c23(),["SharedCodec44"]:c24(),["SharedCodec538"]:c25(),["SharedCodec6"]:c26(),["SignedMoney"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerRefund(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
