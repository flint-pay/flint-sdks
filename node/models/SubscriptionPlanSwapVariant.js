import { d894 as c0, d323 as c1, d2334 as c2, d2403 as c3 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2403 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2403;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Image"]:c0(),["MoneyValue"]:c1(),["SelectedProductOption"]:c2(),["SubscriptionPlanSwapVariant"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanSwapVariant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
