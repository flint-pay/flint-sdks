import { d590 as c0, d592 as c1, d724 as c2, d323 as c3, d591 as c4 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d592 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d592;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryInputConstraint"]:c0(),["DeliveryInputRequirement"]:c1(),["DeliveryWindowResource"]:c2(),["MoneyValue"]:c3(),["SharedCodec186"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryInputRequirement(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
