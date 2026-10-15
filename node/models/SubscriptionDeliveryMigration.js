import { d2373 as c0, d2376 as c1 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2373 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2373;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionDeliveryMigration"]:c0(),["SubscriptionDeliveryMigrationFailureReasonCount"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionDeliveryMigration(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
