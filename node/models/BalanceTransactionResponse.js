import { d44 as c0, d52 as c1, d53 as c2, d42 as c3, d867 as c4, d314 as c5, d1775 as c6, d1776 as c7, d1992 as c8, d2112 as c9, d2113 as c10, d2274 as c11, d14 as c12, d50 as c13, d51 as c14, d1774 as c15, d43 as c16, d46 as c17, d47 as c18, d48 as c19, d49 as c20, d1970 as c21 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d53 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d53;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["BalanceTransactionRelatedResource"]:c1(),["BalanceTransactionResponse"]:c2(),["ExpandedOrderSummary"]:c3(),["HoldDetail"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["PricingAmounts"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10(),["SettlementAmounts"]:c11(),["SharedCodec1"]:c12(),["SharedCodec10"]:c13(),["SharedCodec11"]:c14(),["SharedCodec448"]:c15(),["SharedCodec5"]:c16(),["SharedCodec6"]:c17(),["SharedCodec7"]:c18(),["SharedCodec8"]:c19(),["SharedCodec9"]:c20(),["SignedMoney"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalanceTransactionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
