import { d578 as c0, d579 as c1, d589 as c2, d723 as c3, d74 as c4 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d578 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d578;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCalculatedPricingStrategy"]:c0(),["DeliveryCalculatedPricingStrategyRequest"]:c1(),["DeliveryDistanceUnitPriceRequest"]:c2(),["DeliveryWeightUnitPriceRequest"]:c3(),["MoneyValue"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryCalculatedPricingStrategy(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
