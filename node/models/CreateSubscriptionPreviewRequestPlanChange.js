import { d242 as c0 } from '../descriptors/data/14.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3294 as c1, d3295 as c2 } from '../descriptors/data/131.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d242 as d242 } from '../descriptors/data/14.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d242;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPreviewRequestPlanChange"]:c0(),["SharedCodec47"]:c1(),["SharedCodec48"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestPlanChange(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
