import { d5169 as c0 } from '../descriptors/data/237.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2410 as c1 } from '../descriptors/data/95.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2410 as d2410 } from '../descriptors/data/95.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2410;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionOfferLineItemRequest"]:c0(),["SubscriptionOfferTermsRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionOfferTermsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
