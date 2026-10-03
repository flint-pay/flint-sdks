import { d645 as c0, d646 as c1, d74 as c2 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d645 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d645;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryPricingTierBand"]:c0(),["DeliveryPricingTierBandRequest"]:c1(),["MoneyValue"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPricingTierBand(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
