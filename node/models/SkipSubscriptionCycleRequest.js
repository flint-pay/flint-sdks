import { d5507 as c0 } from '../descriptors/data/240.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5507 as d5507 } from '../descriptors/data/240.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5507;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SkipSubscriptionCycleRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSkipSubscriptionCycleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
