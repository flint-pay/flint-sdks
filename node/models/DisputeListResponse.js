import { d771 as c0, d772 as c1, d90 as c2, d45 as c3, d141 as c4, d77 as c5, d1824 as c6, d1823 as c7, d1994 as c8, d1995 as c9, d1997 as c10, d2035 as c11, d2158 as c12, d2159 as c13, d2321 as c14, d14 as c15, d769 as c16, d770 as c17, d1822 as c18, d46 as c19, d226 as c20 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d772 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d772;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["DisputeListResponse"]:c1(),["ExpandedCustomerSummary"]:c2(),["ExpandedOrderSummary"]:c3(),["ExpandedPaymentIntentSummary"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["PaymentSourceAchDebitSummary"]:c8(),["PaymentSourceCardSummary"]:c9(),["PaymentSourceSummary"]:c10(),["PricingAmounts"]:c11(),["ResponseMeta"]:c12(),["ResponseWarning"]:c13(),["SettlementAmounts"]:c14(),["SharedCodec1"]:c15(),["SharedCodec246"]:c16(),["SharedCodec247"]:c17(),["SharedCodec488"]:c18(),["SharedCodec8"]:c19(),["SignedMoney"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDisputeListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
