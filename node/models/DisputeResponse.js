import { d723 as c0, d725 as c1, d90 as c2, d42 as c3, d100 as c4, d314 as c5, d1775 as c6, d1776 as c7, d1950 as c8, d1951 as c9, d1953 as c10, d1992 as c11, d2112 as c12, d2113 as c13, d2274 as c14, d14 as c15, d721 as c16, d722 as c17, d1774 as c18, d43 as c19, d1970 as c20 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d725 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d725;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["DisputeResponse"]:c1(),["ExpandedCustomerSummary"]:c2(),["ExpandedOrderSummary"]:c3(),["ExpandedPaymentIntentSummary"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["PaymentSourceAchDebitSummary"]:c8(),["PaymentSourceCardSummary"]:c9(),["PaymentSourceSummary"]:c10(),["PricingAmounts"]:c11(),["ResponseMeta"]:c12(),["ResponseWarning"]:c13(),["SettlementAmounts"]:c14(),["SharedCodec1"]:c15(),["SharedCodec212"]:c16(),["SharedCodec213"]:c17(),["SharedCodec448"]:c18(),["SharedCodec5"]:c19(),["SignedMoney"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDisputeResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
