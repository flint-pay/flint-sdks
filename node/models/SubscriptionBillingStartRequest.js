import { d11122 as c0, d11123 as c1, d11137 as c2 } from '../descriptors/data/531.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d11137 as d11137 } from '../descriptors/data/531.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d11137;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2931"]:c0(),["SharedCodec2932"]:c1(),["SubscriptionBillingStartRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionBillingStartRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
