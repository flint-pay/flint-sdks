import { d327 as c0, d672 as c1, d666 as c2, d656 as c3, d664 as c4, d665 as c5, d668 as c6, d667 as c7, d669 as c8, d671 as c9, d670 as c10, d658 as c11 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d327 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d327;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryProfileRequest"]:c0(),["DeliveryProfileConfigurationRequest"]:c1(),["DeliveryProfileOriginPolicyRequest"]:c2(),["Dimensions"]:c3(),["SharedCodec219"]:c4(),["SharedCodec220"]:c5(),["SharedCodec221"]:c6(),["SharedCodec222"]:c7(),["SharedCodec223"]:c8(),["SharedCodec224"]:c9(),["SharedCodec225"]:c10(),["Weight"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
