import { d2170 as c0, d2214 as c1, d2168 as c2, d2169 as c3 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d2170 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2170;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnEligibilitySelection"]:c0(),["ReturnLineItemRequest"]:c1(),["SharedCodec545"]:c2(),["SharedCodec546"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilitySelection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
