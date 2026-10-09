import { d637 as c0, d638 as c1, d323 as c2 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d637 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d637;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryPricingTierBand"]:c0(),["DeliveryPricingTierBandRequest"]:c1(),["MoneyValue"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPricingTierBand(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
