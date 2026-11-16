import { d9398 as c0 } from '../descriptors/data/430.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9398 as d9398 } from '../descriptors/data/430.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9398;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionQuantityChangeLineItemRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionQuantityChangeLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
