import { d3232 as c0 } from '../descriptors/data/129.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3232 as d3232 } from '../descriptors/data/129.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3232;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutRedirectsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
