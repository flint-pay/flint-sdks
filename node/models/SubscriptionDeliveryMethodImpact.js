import { d2363 as c0, d2371 as c1 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2371 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2371;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionCounts"]:c0(),["SubscriptionDeliveryMethodImpact"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionDeliveryMethodImpact(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
