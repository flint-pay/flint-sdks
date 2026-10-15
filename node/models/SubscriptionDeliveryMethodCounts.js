import { d2363 as c0, d2370 as c1 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2370 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2370;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionCounts"]:c0(),["SubscriptionDeliveryMethodCounts"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionDeliveryMethodCounts(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
