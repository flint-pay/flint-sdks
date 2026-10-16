import { d681 as c0 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d681 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d681;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateCallbackSigningKeyRotation"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateCallbackSigningKeyRotation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
