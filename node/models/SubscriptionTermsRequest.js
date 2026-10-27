import { d5164 as c0, d5165 as c1, d5169 as c4 } from '../descriptors/data/237.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3294 as c2, d3295 as c3 } from '../descriptors/data/131.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d5171 as c5 } from '../descriptors/data/238.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d5171 as d5171 } from '../descriptors/data/238.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5171;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1160"]:c0(),["SharedCodec1161"]:c1(),["SharedCodec47"]:c2(),["SharedCodec48"]:c3(),["SubscriptionOfferLineItemRequest"]:c4(),["SubscriptionTermsRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionTermsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
