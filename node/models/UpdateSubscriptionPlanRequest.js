import { d896 as c0, d1631 as c1, d323 as c2, d371 as c3, d1880 as c4, d373 as c5, d372 as c6, d370 as c7, d369 as c8, d1628 as c9, d1629 as c10, d1630 as c11, d1995 as c12, d1994 as c13, d2397 as c14, d2396 as c15, d2399 as c16, d2398 as c17, d2449 as c18, d2529 as c19, d2381 as c20, d2431 as c21, d2572 as c22, d2573 as c23 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2573 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2573;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageRequest"]:c0(),["InventoryRoutingSourceRequest"]:c1(),["MoneyValue"]:c2(),["OrderLineItemModifierRequest"]:c3(),["OrderLineItemTax"]:c4(),["SharedCodec114"]:c5(),["SharedCodec115"]:c6(),["SharedCodec116"]:c7(),["SharedCodec117"]:c8(),["SharedCodec404"]:c9(),["SharedCodec405"]:c10(),["SharedCodec406"]:c11(),["SharedCodec500"]:c12(),["SharedCodec501"]:c13(),["SharedCodec591"]:c14(),["SharedCodec592"]:c15(),["SharedCodec593"]:c16(),["SharedCodec594"]:c17(),["SharedCodec607"]:c18(),["SharedCodec643"]:c19(),["SubscriptionIntervalOption"]:c20(),["TextModifierRequest"]:c21(),["UpdateSubscriptionPlanLineItemRequest"]:c22(),["UpdateSubscriptionPlanRequest"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
