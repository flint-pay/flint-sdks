import { d2360 as c0 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2360 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2360;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionDeliveryMigrationFailureReasonCount"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionDeliveryMigrationFailureReasonCount(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
