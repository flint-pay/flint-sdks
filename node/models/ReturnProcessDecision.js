import { d10739 as c0 } from '../descriptors/data/510.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10748 as c1, d10749 as c2 } from '../descriptors/data/511.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10739 as d10739 } from '../descriptors/data/510.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10739;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnProcessDecision"]:c0(),["SharedCodec2711"]:c1(),["SharedCodec2712"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnProcessDecision(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
