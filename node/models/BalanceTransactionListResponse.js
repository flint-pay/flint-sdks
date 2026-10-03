import { d51 as c0, d52 as c1, d42 as c2, d1781 as c3, d1782 as c4, d74 as c5, d1784 as c6, d1783 as c7, d1993 as c8, d2119 as c9, d2280 as c10, d45 as c11, d46 as c12, d47 as c13, d48 as c14, d49 as c15, d37 as c16, d41 as c17, d43 as c18, d50 as c19, d44 as c20, d1804 as c21 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d52 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d52;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["BalanceTransactionListResponse"]:c1(),["ExpandedOrderSummary"]:c2(),["MoneyMovementHistoryMeta"]:c3(),["MoneyMovementListMeta"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["PricingAmounts"]:c8(),["ResponseWarning"]:c9(),["SettlementAmounts"]:c10(),["SharedCodec10"]:c11(),["SharedCodec11"]:c12(),["SharedCodec12"]:c13(),["SharedCodec13"]:c14(),["SharedCodec14"]:c15(),["SharedCodec4"]:c16(),["SharedCodec6"]:c17(),["SharedCodec7"]:c18(),["SharedCodec8"]:c19(),["SharedCodec9"]:c20(),["SignedMoney"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalanceTransactionListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
