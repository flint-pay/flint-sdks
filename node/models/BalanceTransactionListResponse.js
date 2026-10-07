import { d54 as c0, d55 as c1, d45 as c2, d1820 as c3, d1821 as c4, d77 as c5, d1824 as c6, d1823 as c7, d2035 as c8, d2159 as c9, d2321 as c10, d14 as c11, d47 as c12, d48 as c13, d49 as c14, d50 as c15, d51 as c16, d52 as c17, d1822 as c18, d40 as c19, d44 as c20, d46 as c21, d53 as c22, d226 as c23 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d55 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d55;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["BalanceTransactionListResponse"]:c1(),["ExpandedOrderSummary"]:c2(),["MoneyMovementHistoryMeta"]:c3(),["MoneyMovementListMeta"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["PricingAmounts"]:c8(),["ResponseWarning"]:c9(),["SettlementAmounts"]:c10(),["SharedCodec1"]:c11(),["SharedCodec10"]:c12(),["SharedCodec11"]:c13(),["SharedCodec12"]:c14(),["SharedCodec13"]:c15(),["SharedCodec14"]:c16(),["SharedCodec15"]:c17(),["SharedCodec488"]:c18(),["SharedCodec5"]:c19(),["SharedCodec7"]:c20(),["SharedCodec8"]:c21(),["SharedCodec9"]:c22(),["SignedMoney"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalanceTransactionListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
