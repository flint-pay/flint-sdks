import { d3296 as c0, d3294 as c2, d3295 as c3 } from '../descriptors/data/131.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3108 as c1 } from '../descriptors/data/122.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2433 as c4 } from '../descriptors/data/96.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2433 as d2433 } from '../descriptors/data/96.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2433;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerContactRequest"]:c0(),["CheckoutSubscriptionTermsRequest"]:c1(),["SharedCodec47"]:c2(),["SharedCodec48"]:c3(),["UpdateCheckoutSessionRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
