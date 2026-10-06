import { d659 as c0, d657 as c1, d656 as c2, d658 as c3 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d659 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d659;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfiguration"]:c0(),["DeliveryProfileOriginPolicy"]:c1(),["Dimensions"]:c2(),["Weight"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfiguration(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
