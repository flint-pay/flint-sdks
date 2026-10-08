import { d560 as c0, d570 as c1, d712 as c2, d323 as c3 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d560 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d560;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCalculatedPricingStrategyRequest"]:c0(),["DeliveryDistanceUnitPriceRequest"]:c1(),["DeliveryWeightUnitPriceRequest"]:c2(),["MoneyValue"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryCalculatedPricingStrategyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
