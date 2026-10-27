import { d147 as c0 } from '../descriptors/data/6.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3831 as c1 } from '../descriptors/data/160.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d147 as d147 } from '../descriptors/data/6.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d147;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateFeedbackReportRating"]:c0(),["FeedbackReportingClient"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFeedbackReportRating(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
