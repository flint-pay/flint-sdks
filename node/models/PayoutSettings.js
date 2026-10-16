import { d1819 as c0, d323 as c1, d1823 as c2, d1824 as c3, d2046 as c4, d14 as c5, d1822 as c6 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2046 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2046;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyMovementBlockedReason"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PayoutSettings"]:c4(),["SharedCodec1"]:c5(),["SharedCodec467"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutSettings(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
