import { d302 as c0, d648 as c1, d654 as c2, d738 as c3, d644 as c4, d643 as c5, d645 as c6, d647 as c7, d646 as c8, d652 as c9, d653 as c10, d2646 as c11 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d302 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d302;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryProfileRequest"]:c0(),["DeliveryProfileConfigurationRequest"]:c1(),["DeliveryProfileOriginPolicyRequest"]:c2(),["Dimensions"]:c3(),["SharedCodec196"]:c4(),["SharedCodec197"]:c5(),["SharedCodec198"]:c6(),["SharedCodec199"]:c7(),["SharedCodec200"]:c8(),["SharedCodec201"]:c9(),["SharedCodec202"]:c10(),["Weight"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
