import { d744 as c0, d746 as c1, d90 as c2, d42 as c3, d100 as c4, d323 as c5, d1820 as c6, d1821 as c7, d1997 as c8, d1998 as c9, d2000 as c10, d2039 as c11, d2162 as c12, d2163 as c13, d2324 as c14, d14 as c15, d742 as c16, d743 as c17, d1819 as c18, d43 as c19, d2017 as c20 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d746 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d746;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["DisputeResponse"]:c1(),["ExpandedCustomerSummary"]:c2(),["ExpandedOrderSummary"]:c3(),["ExpandedPaymentIntentSummary"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["PaymentSourceAchDebitSummary"]:c8(),["PaymentSourceCardSummary"]:c9(),["PaymentSourceSummary"]:c10(),["PricingAmounts"]:c11(),["ResponseMeta"]:c12(),["ResponseWarning"]:c13(),["SettlementAmounts"]:c14(),["SharedCodec1"]:c15(),["SharedCodec221"]:c16(),["SharedCodec222"]:c17(),["SharedCodec466"]:c18(),["SharedCodec5"]:c19(),["SignedMoney"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDisputeResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
