import { d161 as c0, d160 as c1, d1780 as c2, d1784 as c3, d1783 as c4 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d161 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d161;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Capability"]:c0(),["CapabilityRequirements"]:c1(),["MoneyMovementBlockedReason"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCapability(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
