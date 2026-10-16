import { d721 as c0, d722 as c1, d323 as c2 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d721 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d721;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryWeightUnitPrice"]:c0(),["DeliveryWeightUnitPriceRequest"]:c1(),["MoneyValue"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryWeightUnitPrice(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
