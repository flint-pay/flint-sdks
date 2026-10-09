import { d44 as c0, d45 as c1, d52 as c2, d42 as c3, d888 as c4, d1817 as c5, d1818 as c6, d323 as c7, d1820 as c8, d1821 as c9, d2039 as c10, d2163 as c11, d2324 as c12, d14 as c13, d50 as c14, d51 as c15, d1819 as c16, d43 as c17, d46 as c18, d47 as c19, d48 as c20, d49 as c21, d2017 as c22 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d45 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d45;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["BalanceTransactionListResponse"]:c1(),["BalanceTransactionRelatedResource"]:c2(),["ExpandedOrderSummary"]:c3(),["HoldDetail"]:c4(),["MoneyMovementHistoryMeta"]:c5(),["MoneyMovementListMeta"]:c6(),["MoneyValue"]:c7(),["NextAction"]:c8(),["NextActionMerchantAccountSession"]:c9(),["PricingAmounts"]:c10(),["ResponseWarning"]:c11(),["SettlementAmounts"]:c12(),["SharedCodec1"]:c13(),["SharedCodec10"]:c14(),["SharedCodec11"]:c15(),["SharedCodec466"]:c16(),["SharedCodec5"]:c17(),["SharedCodec6"]:c18(),["SharedCodec7"]:c19(),["SharedCodec8"]:c20(),["SharedCodec9"]:c21(),["SignedMoney"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalanceTransactionListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
