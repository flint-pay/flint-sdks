import { d658 as c0, d664 as c1, d748 as c2, d654 as c3, d653 as c4, d655 as c5, d657 as c6, d656 as c7, d662 as c8, d663 as c9, d2662 as c10 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d658 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d658;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["Dimensions"]:c2(),["SharedCodec202"]:c3(),["SharedCodec203"]:c4(),["SharedCodec204"]:c5(),["SharedCodec205"]:c6(),["SharedCodec206"]:c7(),["SharedCodec207"]:c8(),["SharedCodec208"]:c9(),["Weight"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
