import { d1100 as c0 } from '../descriptors/data/54.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1100 as d1100 } from '../descriptors/data/54.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1100;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PauseSubscriptionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePauseSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
