import { d3294 as c0, d3295 as c1 } from '../descriptors/data/131.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d2417 as c2 } from '../descriptors/data/95.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d2417 as d2417 } from '../descriptors/data/95.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2417;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec47"]:c0(),["SharedCodec48"]:c1(),["SubscriptionPlanTermsRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanTermsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
