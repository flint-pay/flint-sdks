import { d40 as c0, d41 as c1, d1820 as c2, d1821 as c3, d323 as c4, d1823 as c5, d1824 as c6, d2179 as c7, d14 as c8, d1822 as c9, d2034 as c10 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d41 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d41;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Balance"]:c0(),["BalanceListResponse"]:c1(),["MoneyMovementHistoryMeta"]:c2(),["MoneyMovementListMeta"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec467"]:c9(),["SignedMoney"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalanceListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
