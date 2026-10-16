import { d127 as c0, d129 as c1, d1819 as c2, d1823 as c3, d1824 as c4, d14 as c5, d1822 as c6 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d127 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d127;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Capability"]:c0(),["CapabilityRequirements"]:c1(),["MoneyMovementBlockedReason"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["SharedCodec1"]:c5(),["SharedCodec467"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCapability(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
