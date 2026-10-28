import { d5176 as c0, d5177 as c1 } from '../descriptors/data/238.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d2494 as c2 } from '../descriptors/data/101.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d2494 as d2494 } from '../descriptors/data/101.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2494;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1247"]:c0(),["SharedCodec1248"]:c1(),["UpdateSubscriptionBillingScheduleRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionBillingScheduleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
