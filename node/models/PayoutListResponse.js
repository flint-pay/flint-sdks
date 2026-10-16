import { d777 as c0, d778 as c1, d1820 as c2, d1821 as c3, d323 as c4, d1823 as c5, d1824 as c6, d2038 as c7, d2044 as c8, d2048 as c9, d2179 as c10, d14 as c11, d860 as c12, d1822 as c13, d2035 as c14, d2036 as c15, d2037 as c16, d2034 as c17 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2044 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2044;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPayoutDestinationSummary"]:c0(),["ExpandedPayoutSummary"]:c1(),["MoneyMovementHistoryMeta"]:c2(),["MoneyMovementListMeta"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["Payout"]:c7(),["PayoutListResponse"]:c8(),["PayoutTraceID"]:c9(),["ResponseWarning"]:c10(),["SharedCodec1"]:c11(),["SharedCodec248"]:c12(),["SharedCodec467"]:c13(),["SharedCodec509"]:c14(),["SharedCodec510"]:c15(),["SharedCodec511"]:c16(),["SignedMoney"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
