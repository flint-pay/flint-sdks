import { d616 as c0, d614 as c1, d615 as c2, d281 as c3, d280 as c4 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d616 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d616;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelector"]:c0(),["SharedCodec207"]:c1(),["SharedCodec208"]:c2(),["SharedCodec75"]:c3(),["SharedCodec76"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelector(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
