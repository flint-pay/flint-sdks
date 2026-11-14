import { d8774 as c0, d8775 as c1 } from '../descriptors/data/433.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8808 as c2 } from '../descriptors/data/436.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8808 as d8808 } from '../descriptors/data/436.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8808;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1565"]:c0(),["SharedCodec1566"]:c1(),["SubscriptionBillingScheduleUpdateRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionBillingScheduleUpdateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
