import { d5610 as c0 } from '../descriptors/data/244.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5610 as d5610 } from '../descriptors/data/244.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5610;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionTaxCalculationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionTaxCalculationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
