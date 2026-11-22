import { d10742 as c0 } from '../descriptors/data/510.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10590 as c1 } from '../descriptors/data/499.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10593 as c2, d10594 as c3, d10595 as c4 } from '../descriptors/data/500.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9159 as c5 } from '../descriptors/data/414.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10742 as d10742 } from '../descriptors/data/510.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10742;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnProcessReceiptRequest"]:c0(),["ReturnSourceSystemRequest"]:c1(),["SharedCodec2685"]:c2(),["SharedCodec2686"]:c3(),["SharedCodec2687"]:c4(),["SharedCodec455"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnProcessReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
