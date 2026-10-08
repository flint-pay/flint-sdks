import { d638 as c0, d707 as c1, d708 as c2, d323 as c3, d706 as c4 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d707 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d707;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryPricingTierBandRequest"]:c0(),["DeliveryTieredPricingStrategy"]:c1(),["DeliveryTieredPricingStrategyRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec215"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryTieredPricingStrategy(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
