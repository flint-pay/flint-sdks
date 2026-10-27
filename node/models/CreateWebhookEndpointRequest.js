import { d244 as c0 } from '../descriptors/data/14.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d5218 as c1, d5219 as c2 } from '../descriptors/data/241.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d244 as d244 } from '../descriptors/data/14.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d244;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateWebhookEndpointRequest"]:c0(),["SharedCodec236"]:c1(),["SharedCodec237"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateWebhookEndpointRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
