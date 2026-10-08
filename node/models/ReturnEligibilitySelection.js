import { d2175 as c0, d2219 as c1, d2173 as c2, d2174 as c3 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2175 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2175;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnEligibilitySelection"]:c0(),["ReturnLineItemRequest"]:c1(),["SharedCodec522"]:c2(),["SharedCodec523"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilitySelection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
