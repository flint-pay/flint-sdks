import { d8784 as c0 } from '../descriptors/data/433.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8784 as d8784 } from '../descriptors/data/433.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8784;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionOfferLineItemRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionOfferLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
