import { d5955 as c0 } from '../descriptors/data/270.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6128 as c1, d6129 as c2, d6137 as c3, d6138 as c4 } from '../descriptors/data/281.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5955 as d5955 } from '../descriptors/data/270.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5955;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutSubscriptionTermsRequest"]:c0(),["SharedCodec150"]:c1(),["SharedCodec151"]:c2(),["SharedCodec174"]:c3(),["SharedCodec175"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSubscriptionTermsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
