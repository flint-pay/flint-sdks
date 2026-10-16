import { d2373 as c0, d2376 as c1 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2373 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2373;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionDeliveryMigration"]:c0(),["SubscriptionDeliveryMigrationFailureReasonCount"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionDeliveryMigration(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
