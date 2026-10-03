import { d576 as c0, d577 as c1, d587 as c2, d721 as c3, d74 as c4 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d576 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d576;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCalculatedPricingStrategy"]:c0(),["DeliveryCalculatedPricingStrategyRequest"]:c1(),["DeliveryDistanceUnitPriceRequest"]:c2(),["DeliveryWeightUnitPriceRequest"]:c3(),["MoneyValue"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryCalculatedPricingStrategy(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
