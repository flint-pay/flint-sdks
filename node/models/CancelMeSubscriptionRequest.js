import { d125 as c0 } from '../descriptors/data/6.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d125 as d125 } from '../descriptors/data/6.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d125;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CancelMeSubscriptionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCancelMeSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
