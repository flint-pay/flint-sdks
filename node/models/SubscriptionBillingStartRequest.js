import { d8746 as c0, d8747 as c1 } from '../descriptors/data/432.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8761 as c2 } from '../descriptors/data/433.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8761 as d8761 } from '../descriptors/data/433.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8761;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1567"]:c0(),["SharedCodec1568"]:c1(),["SubscriptionBillingStartRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionBillingStartRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
