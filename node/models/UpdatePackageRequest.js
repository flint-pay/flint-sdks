import { d8057 as c0 } from '../descriptors/data/352.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8155 as c1 } from '../descriptors/data/359.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10047 as c2, d10048 as c3, d10049 as c4, d10050 as c5 } from '../descriptors/data/466.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7785 as c6 } from '../descriptors/data/328.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7785 as d7785 } from '../descriptors/data/328.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7785;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3081"]:c0(),["SharedCodec3084"]:c1(),["SharedCodec3150"]:c2(),["SharedCodec3151"]:c3(),["SharedCodec3152"]:c4(),["SharedCodec3153"]:c5(),["UpdatePackageRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
