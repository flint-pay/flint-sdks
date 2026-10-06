import { d593 as c0, d603 as c1, d739 as c2, d77 as c3 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d593 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d593;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCalculatedPricingStrategyRequest"]:c0(),["DeliveryDistanceUnitPriceRequest"]:c1(),["DeliveryWeightUnitPriceRequest"]:c2(),["MoneyValue"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryCalculatedPricingStrategyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
