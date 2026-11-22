import { d10447 as c0 } from '../descriptors/data/490.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9696 as c1, d9697 as c2, d9698 as c3, d9699 as c4 } from '../descriptors/data/447.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9700 as c5 } from '../descriptors/data/448.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10447 as d10447 } from '../descriptors/data/490.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10447;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrenceRequest"]:c0(),["SharedCodec2434"]:c1(),["SharedCodec2435"]:c2(),["SharedCodec2436"]:c3(),["SharedCodec2437"]:c4(),["SharedCodec2438"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrenceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
