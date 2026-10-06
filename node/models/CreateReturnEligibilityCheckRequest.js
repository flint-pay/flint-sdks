import { d475 as c0, d2170 as c1, d2214 as c2, d2168 as c3, d2169 as c4 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d475 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d475;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityCheckRequest"]:c0(),["ReturnEligibilitySelection"]:c1(),["ReturnLineItemRequest"]:c2(),["SharedCodec545"]:c3(),["SharedCodec546"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnEligibilityCheckRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
