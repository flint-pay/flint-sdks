import { d3216 as c0 } from '../descriptors/data/128.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2498 as c1 } from '../descriptors/data/101.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2498 as d2498 } from '../descriptors/data/101.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2498;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionIntervalOption"]:c0(),["UpdateSubscriptionOfferRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionOfferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
