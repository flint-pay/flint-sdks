import { d6494 as c0 } from '../descriptors/data/298.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6494 as d6494 } from '../descriptors/data/298.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6494;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryWindowTimeCondition"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryWindowTimeCondition(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
