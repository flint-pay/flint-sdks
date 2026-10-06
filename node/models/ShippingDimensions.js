import { d2297 as c0 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2297 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2297;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ShippingDimensions"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeShippingDimensions(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
