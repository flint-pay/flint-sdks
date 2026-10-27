import { d3108 as c0 } from '../descriptors/data/122.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3294 as c1, d3295 as c2 } from '../descriptors/data/131.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3108 as d3108 } from '../descriptors/data/122.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3108;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutSubscriptionTermsRequest"]:c0(),["SharedCodec47"]:c1(),["SharedCodec48"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSubscriptionTermsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
