import { d609 as c0, d610 as c1, d77 as c2 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d609 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d609;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryFixedPricingStrategy"]:c0(),["DeliveryFixedPricingStrategyRequest"]:c1(),["MoneyValue"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryFixedPricingStrategy(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
