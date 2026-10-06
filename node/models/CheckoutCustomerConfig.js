import { d180 as c0, d73 as c1, d2033 as c2 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d180 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d180;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomerConfig"]:c0(),["PostalAddress"]:c1(),["PrefilledCustomerInfo"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutCustomerConfig(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
