import { d7572 as c0 } from '../descriptors/data/361.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7572 as d7572 } from '../descriptors/data/361.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7572;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionQuantityChangeLineItemRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionQuantityChangeLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
