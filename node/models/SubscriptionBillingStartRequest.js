import { d6925 as c0, d6926 as c1 } from '../descriptors/data/329.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6939 as c2 } from '../descriptors/data/330.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6939 as d6939 } from '../descriptors/data/330.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6939;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1259"]:c0(),["SharedCodec1260"]:c1(),["SubscriptionBillingStartRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionBillingStartRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
