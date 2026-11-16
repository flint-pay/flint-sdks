import { d8772 as c0, d8773 as c1, d8787 as c2 } from '../descriptors/data/433.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8787 as d8787 } from '../descriptors/data/433.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8787;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1637"]:c0(),["SharedCodec1638"]:c1(),["SubscriptionTaxRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
