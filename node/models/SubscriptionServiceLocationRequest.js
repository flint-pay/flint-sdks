import { d3162 as c0 } from '../descriptors/data/125.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d5162 as c1, d5163 as c2 } from '../descriptors/data/237.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d5170 as c3 } from '../descriptors/data/238.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d5170 as d5170 } from '../descriptors/data/238.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5170;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec1158"]:c1(),["SharedCodec1159"]:c2(),["SubscriptionServiceLocationRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionServiceLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
