import { d145 as c0, d66 as c1, d2055 as c2 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d145 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d145;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomerConfig"]:c0(),["PostalAddress"]:c1(),["PrefilledCustomerInfo"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutCustomerConfig(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
