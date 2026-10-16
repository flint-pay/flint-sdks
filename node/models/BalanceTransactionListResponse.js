import { d44 as c0, d45 as c1, d52 as c2, d42 as c3, d893 as c4, d1820 as c5, d1821 as c6, d323 as c7, d1823 as c8, d1824 as c9, d2056 as c10, d2179 as c11, d2340 as c12, d14 as c13, d50 as c14, d51 as c15, d1822 as c16, d43 as c17, d46 as c18, d47 as c19, d48 as c20, d49 as c21, d2034 as c22 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d45 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d45;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["BalanceTransactionListResponse"]:c1(),["BalanceTransactionRelatedResource"]:c2(),["ExpandedOrderSummary"]:c3(),["HoldDetail"]:c4(),["MoneyMovementHistoryMeta"]:c5(),["MoneyMovementListMeta"]:c6(),["MoneyValue"]:c7(),["NextAction"]:c8(),["NextActionMerchantAccountSession"]:c9(),["PricingAmounts"]:c10(),["ResponseWarning"]:c11(),["SettlementAmounts"]:c12(),["SharedCodec1"]:c13(),["SharedCodec10"]:c14(),["SharedCodec11"]:c15(),["SharedCodec467"]:c16(),["SharedCodec5"]:c17(),["SharedCodec6"]:c18(),["SharedCodec7"]:c19(),["SharedCodec8"]:c20(),["SharedCodec9"]:c21(),["SignedMoney"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalanceTransactionListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
