import { d185 as c0 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d185 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d185;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutDeliveryPinnedDependency"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutDeliveryPinnedDependency(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
