import { d10598 as c0, d10599 as c1, d10613 as c2 } from '../descriptors/data/501.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d10613 as d10613 } from '../descriptors/data/501.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10613;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2884"]:c0(),["SharedCodec2885"]:c1(),["SubscriptionTaxRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
