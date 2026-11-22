import { d10 as c0 } from '../descriptors/data/0.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9730 as c1 } from '../descriptors/data/449.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10 as d10 } from '../descriptors/data/0.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddReturnLineItemRequest"]:c0(),["ReturnLineItemRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddReturnLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
