import { d8601 as c0 } from '../descriptors/data/383.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8634 as c1 } from '../descriptors/data/384.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8601 as d8601 } from '../descriptors/data/383.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8601;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet"]:c0(),["SharedCodec407"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
