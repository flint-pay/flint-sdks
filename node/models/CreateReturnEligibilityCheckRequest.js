import { d429 as c0, d2175 as c1, d2219 as c2, d2173 as c3, d2174 as c4 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d429 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d429;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityCheckRequest"]:c0(),["ReturnEligibilitySelection"]:c1(),["ReturnLineItemRequest"]:c2(),["SharedCodec522"]:c3(),["SharedCodec523"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnEligibilityCheckRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
