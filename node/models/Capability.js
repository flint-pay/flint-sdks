import { d172 as c0, d171 as c1, d1825 as c2, d1830 as c3, d1829 as c4, d14 as c5, d1828 as c6 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d172 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d172;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Capability"]:c0(),["CapabilityRequirements"]:c1(),["MoneyMovementBlockedReason"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["SharedCodec1"]:c5(),["SharedCodec492"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCapability(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
