import { d5523 as c0 } from '../descriptors/data/241.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5523 as d5523 } from '../descriptors/data/241.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5523;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionGiftRecipientRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionGiftRecipientRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
