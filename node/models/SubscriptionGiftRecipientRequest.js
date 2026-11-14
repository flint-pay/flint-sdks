import { d5529 as c0 } from '../descriptors/data/242.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5529 as d5529 } from '../descriptors/data/242.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5529;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionGiftRecipientRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionGiftRecipientRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
