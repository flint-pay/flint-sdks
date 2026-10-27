import { d3560 as c0 } from '../descriptors/data/146.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d339 as c1 } from '../descriptors/data/19.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3013 as c2 } from '../descriptors/data/116.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d339 as d339 } from '../descriptors/data/19.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d339;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryPricingTierBandRequest"]:c0(),["DeliveryTieredPricingStrategyInputWeight"]:c1(),["MoneyValue"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryTieredPricingStrategyInputWeight(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
