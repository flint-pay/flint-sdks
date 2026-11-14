import { d5920 as c0 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6018 as c1 } from '../descriptors/data/274.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8700 as c2 } from '../descriptors/data/429.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5707 as c3 } from '../descriptors/data/252.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5707 as d5707 } from '../descriptors/data/252.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5707;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1692"]:c0(),["SharedCodec1695"]:c1(),["SubscriptionIntervalOptionRequest"]:c2(),["UpdateSubscriptionOfferRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionOfferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
