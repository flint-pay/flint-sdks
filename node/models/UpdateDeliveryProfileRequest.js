import { d672 as c0, d666 as c1, d656 as c2, d664 as c3, d665 as c4, d668 as c5, d667 as c6, d669 as c7, d671 as c8, d670 as c9, d2386 as c10, d2394 as c11, d658 as c12 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2394 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2394;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["Dimensions"]:c2(),["SharedCodec219"]:c3(),["SharedCodec220"]:c4(),["SharedCodec221"]:c5(),["SharedCodec222"]:c6(),["SharedCodec223"]:c7(),["SharedCodec224"]:c8(),["SharedCodec225"]:c9(),["SharedCodec629"]:c10(),["UpdateDeliveryProfileRequest"]:c11(),["Weight"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
