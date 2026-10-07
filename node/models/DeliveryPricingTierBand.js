import { d663 as c0, d664 as c1, d77 as c2 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d663 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d663;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryPricingTierBand"]:c0(),["DeliveryPricingTierBandRequest"]:c1(),["MoneyValue"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPricingTierBand(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
