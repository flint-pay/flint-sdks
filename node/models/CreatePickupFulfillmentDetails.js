import { d446 as c0, d70 as c1 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d446 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d446;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePickupFulfillmentDetails"]:c0(),["PostalAddress"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePickupFulfillmentDetails(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
