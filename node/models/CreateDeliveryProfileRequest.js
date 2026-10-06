import { d332 as c0, d681 as c1, d675 as c2, d665 as c3, d673 as c4, d674 as c5, d677 as c6, d676 as c7, d678 as c8, d680 as c9, d679 as c10, d667 as c11 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d332 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d332;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryProfileRequest"]:c0(),["DeliveryProfileConfigurationRequest"]:c1(),["DeliveryProfileOriginPolicyRequest"]:c2(),["Dimensions"]:c3(),["SharedCodec220"]:c4(),["SharedCodec221"]:c5(),["SharedCodec222"]:c6(),["SharedCodec223"]:c7(),["SharedCodec224"]:c8(),["SharedCodec225"]:c9(),["SharedCodec226"]:c10(),["Weight"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
