import { d3299 as c0 } from '../descriptors/data/132.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3299 as d3299 } from '../descriptors/data/132.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3299;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliverySelectionInstructionsRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliverySelectionInstructionsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
