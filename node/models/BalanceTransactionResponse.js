import { d50 as c0, d53 as c1, d41 as c2, d69 as c3, d1646 as c4, d1645 as c5, d1843 as c6, d1959 as c7, d1960 as c8, d2116 as c9, d44 as c10, d45 as c11, d46 as c12, d47 as c13, d48 as c14, d36 as c15, d40 as c16, d42 as c17, d49 as c18, d43 as c19, d1666 as c20 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d53 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d53;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["BalanceTransactionResponse"]:c1(),["ExpandedOrderSummary"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PricingAmounts"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SettlementAmounts"]:c9(),["SharedCodec10"]:c10(),["SharedCodec11"]:c11(),["SharedCodec12"]:c12(),["SharedCodec13"]:c13(),["SharedCodec14"]:c14(),["SharedCodec4"]:c15(),["SharedCodec6"]:c16(),["SharedCodec7"]:c17(),["SharedCodec8"]:c18(),["SharedCodec9"]:c19(),["SignedMoney"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalanceTransactionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
