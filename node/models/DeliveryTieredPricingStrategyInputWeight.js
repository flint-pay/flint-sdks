import { d3560 as c0 } from '../descriptors/data/146.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d339 as c1 } from '../descriptors/data/19.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3013 as c2 } from '../descriptors/data/116.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d339 as d339 } from '../descriptors/data/19.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d339;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryPricingTierBandRequest"]:c0(),["DeliveryTieredPricingStrategyInputWeight"]:c1(),["MoneyValue"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryTieredPricingStrategyInputWeight(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
