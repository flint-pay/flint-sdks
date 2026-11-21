import { d10577 as c0, d10578 as c1, d10579 as c2, d10580 as c3 } from '../descriptors/data/499.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10577 as d10577 } from '../descriptors/data/499.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10577;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnInspectionLineItemRequest"]:c0(),["SharedCodec2704"]:c1(),["SharedCodec2705"]:c2(),["SharedCodec2706"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnInspectionLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
