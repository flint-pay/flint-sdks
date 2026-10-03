import { d51 as c0, d54 as c1, d42 as c2, d74 as c3, d1784 as c4, d1783 as c5, d1994 as c6, d2119 as c7, d2120 as c8, d2281 as c9, d45 as c10, d46 as c11, d47 as c12, d48 as c13, d49 as c14, d37 as c15, d41 as c16, d43 as c17, d50 as c18, d44 as c19, d1804 as c20 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d54 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d54;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["BalanceTransactionResponse"]:c1(),["ExpandedOrderSummary"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PricingAmounts"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SettlementAmounts"]:c9(),["SharedCodec10"]:c10(),["SharedCodec11"]:c11(),["SharedCodec12"]:c12(),["SharedCodec13"]:c13(),["SharedCodec14"]:c14(),["SharedCodec4"]:c15(),["SharedCodec6"]:c16(),["SharedCodec7"]:c17(),["SharedCodec8"]:c18(),["SharedCodec9"]:c19(),["SignedMoney"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalanceTransactionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
