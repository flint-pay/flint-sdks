import { d161 as c0, d162 as c1, d160 as c2, d1780 as c3, d74 as c4, d1784 as c5, d1783 as c6, d2119 as c7, d2120 as c8 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d162 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d162;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Capability"]:c0(),["CapabilityListResponse"]:c1(),["CapabilityRequirements"]:c2(),["MoneyMovementBlockedReason"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCapabilityListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
