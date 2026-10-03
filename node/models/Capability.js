import { d163 as c0, d162 as c1, d1782 as c2, d1786 as c3, d1785 as c4 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d163 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d163;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Capability"]:c0(),["CapabilityRequirements"]:c1(),["MoneyMovementBlockedReason"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCapability(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
