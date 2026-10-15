import { d323 as c0, d371 as c1, d1880 as c2, d373 as c3, d372 as c4, d370 as c5, d369 as c6, d1995 as c7, d1994 as c8, d2397 as c9, d2396 as c10, d2399 as c11, d2398 as c12, d2400 as c13, d2431 as c14 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2400 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2400;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemModifierRequest"]:c1(),["OrderLineItemTax"]:c2(),["SharedCodec114"]:c3(),["SharedCodec115"]:c4(),["SharedCodec116"]:c5(),["SharedCodec117"]:c6(),["SharedCodec500"]:c7(),["SharedCodec501"]:c8(),["SharedCodec591"]:c9(),["SharedCodec592"]:c10(),["SharedCodec593"]:c11(),["SharedCodec594"]:c12(),["SubscriptionPlanLineItemRequest"]:c13(),["TextModifierRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
