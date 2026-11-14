import { d7542 as c0 } from '../descriptors/data/362.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8756 as c1 } from '../descriptors/data/433.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5525 as c2 } from '../descriptors/data/241.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5525 as d5525 } from '../descriptors/data/241.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5525;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec102"]:c0(),["SharedCodec445"]:c1(),["SubscriptionEndAfterRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionEndAfterRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
