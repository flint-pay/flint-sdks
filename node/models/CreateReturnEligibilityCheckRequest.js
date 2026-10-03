import { d465 as c0, d2132 as c1, d2176 as c2, d2130 as c3, d2131 as c4 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d465 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d465;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityCheckRequest"]:c0(),["ReturnEligibilitySelection"]:c1(),["ReturnLineItemRequest"]:c2(),["SharedCodec532"]:c3(),["SharedCodec533"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnEligibilityCheckRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
