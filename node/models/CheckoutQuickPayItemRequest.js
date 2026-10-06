import { d215 as c0, d77 as c1, d1873 as c2 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d215 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d215;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutQuickPayItemRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTax"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutQuickPayItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
