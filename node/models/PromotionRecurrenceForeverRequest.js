import { d1672 as c0 } from '../descriptors/data/83.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9700 as c1 } from '../descriptors/data/448.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d1672 as d1672 } from '../descriptors/data/83.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1672;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrenceForeverRequest"]:c0(),["SharedCodec2438"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrenceForeverRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
