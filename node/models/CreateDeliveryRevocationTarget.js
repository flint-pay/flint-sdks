import { d8815 as c0 } from '../descriptors/data/394.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8822 as c1, d8823 as c2, d8824 as c3, d8825 as c4 } from '../descriptors/data/395.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8815 as d8815 } from '../descriptors/data/394.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8815;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryRevocationTarget"]:c0(),["SharedCodec414"]:c1(),["SharedCodec415"]:c2(),["SharedCodec416"]:c3(),["SharedCodec417"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryRevocationTarget(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
