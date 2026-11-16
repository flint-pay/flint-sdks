import { d5668 as c0 } from '../descriptors/data/247.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5668 as d5668 } from '../descriptors/data/247.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5668;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateDeliveryFulfillmentDetails"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryFulfillmentDetails(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
