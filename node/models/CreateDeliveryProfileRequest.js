import { d302 as c0, d658 as c1, d664 as c2, d748 as c3, d654 as c4, d653 as c5, d655 as c6, d657 as c7, d656 as c8, d662 as c9, d663 as c10, d2662 as c11 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d302 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d302;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryProfileRequest"]:c0(),["DeliveryProfileConfigurationRequest"]:c1(),["DeliveryProfileOriginPolicyRequest"]:c2(),["Dimensions"]:c3(),["SharedCodec202"]:c4(),["SharedCodec203"]:c5(),["SharedCodec204"]:c6(),["SharedCodec205"]:c7(),["SharedCodec206"]:c8(),["SharedCodec207"]:c9(),["SharedCodec208"]:c10(),["Weight"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
