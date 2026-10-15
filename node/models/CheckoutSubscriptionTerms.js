import { d197 as c0, d198 as c1, d323 as c2, d2381 as c3 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d198 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d198;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutSubscriptionRecurringShipping"]:c0(),["CheckoutSubscriptionTerms"]:c1(),["MoneyValue"]:c2(),["SubscriptionIntervalOption"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSubscriptionTerms(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
