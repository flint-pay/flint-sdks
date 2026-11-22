import { d8591 as c0 } from '../descriptors/data/382.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8591 as d8591 } from '../descriptors/data/382.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8591;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryBusinessDayRangeRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryBusinessDayRangeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
