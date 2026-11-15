import { d8737 as c0, d8738 as c1, d8752 as c2 } from '../descriptors/data/431.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8752 as d8752 } from '../descriptors/data/431.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8752;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1555"]:c0(),["SharedCodec1556"]:c1(),["SubscriptionBillingStartRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionBillingStartRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
