import { d706 as c0, d82 as c1, d41 as c2, d704 as c3, d69 as c4, d1803 as c5, d1804 as c6, d1806 as c7, d1843 as c8, d2116 as c9, d703 as c10, d705 as c11, d42 as c12, d1666 as c13 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d706 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d706;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["MoneyValue"]:c4(),["PaymentSourceAchDebitSummary"]:c5(),["PaymentSourceCardSummary"]:c6(),["PaymentSourceSummary"]:c7(),["PricingAmounts"]:c8(),["SettlementAmounts"]:c9(),["SharedCodec218"]:c10(),["SharedCodec219"]:c11(),["SharedCodec7"]:c12(),["SignedMoney"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDispute(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
