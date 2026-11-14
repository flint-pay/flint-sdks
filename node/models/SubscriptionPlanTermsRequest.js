import { d6128 as c0, d6129 as c1 } from '../descriptors/data/281.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5565 as c2 } from '../descriptors/data/244.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5565 as d5565 } from '../descriptors/data/244.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5565;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec150"]:c0(),["SharedCodec151"]:c1(),["SubscriptionPlanTermsRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanTermsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
