import { d5553 as c0 } from '../descriptors/data/242.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5553 as d5553 } from '../descriptors/data/242.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5553;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionGiftRecipientRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionGiftRecipientRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
