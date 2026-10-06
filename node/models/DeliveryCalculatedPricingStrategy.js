import { d592 as c0, d602 as c1, d738 as c2, d77 as c3 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d592 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d592;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCalculatedPricingStrategy"]:c0(),["DeliveryDistanceUnitPrice"]:c1(),["DeliveryWeightUnitPrice"]:c2(),["MoneyValue"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryCalculatedPricingStrategy(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
