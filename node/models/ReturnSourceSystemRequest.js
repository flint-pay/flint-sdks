import { d10590 as c0 } from '../descriptors/data/499.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10593 as c1, d10594 as c2, d10595 as c3 } from '../descriptors/data/500.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9159 as c4 } from '../descriptors/data/414.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10590 as d10590 } from '../descriptors/data/499.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10590;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnSourceSystemRequest"]:c0(),["SharedCodec2685"]:c1(),["SharedCodec2686"]:c2(),["SharedCodec2687"]:c3(),["SharedCodec455"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnSourceSystemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
