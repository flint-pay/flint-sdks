import { d10594 as c0, d10595 as c1, d10609 as c2 } from '../descriptors/data/501.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d10609 as d10609 } from '../descriptors/data/501.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10609;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2782"]:c0(),["SharedCodec2783"]:c1(),["SubscriptionBillingStartRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionBillingStartRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
