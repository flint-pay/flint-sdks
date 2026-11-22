import { d8471 as c0, d8472 as c1 } from '../descriptors/data/376.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8156 as c2, d8157 as c3 } from '../descriptors/data/359.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7792 as c4 } from '../descriptors/data/328.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7792 as d7792 } from '../descriptors/data/328.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7792;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1722"]:c0(),["SharedCodec1723"]:c1(),["SharedCodec2"]:c2(),["SharedCodec3"]:c3(),["UpdatePickupFulfillmentDetails"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePickupFulfillmentDetails(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
