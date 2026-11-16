import { d734 as c0 } from '../descriptors/data/39.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d734 as d734 } from '../descriptors/data/39.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d734;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["HoldFulfillmentRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeHoldFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
