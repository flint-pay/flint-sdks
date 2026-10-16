import { d489 as c0, d896 as c1, d1631 as c2, d323 as c3, d371 as c4, d1880 as c5, d373 as c6, d372 as c7, d370 as c8, d369 as c9, d1628 as c10, d1629 as c11, d1630 as c12, d1995 as c13, d1994 as c14, d2397 as c15, d2396 as c16, d2399 as c17, d2398 as c18, d2381 as c19, d2400 as c20, d2431 as c21 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d489 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d489;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPlanRequest"]:c0(),["ImageRequest"]:c1(),["InventoryRoutingSourceRequest"]:c2(),["MoneyValue"]:c3(),["OrderLineItemModifierRequest"]:c4(),["OrderLineItemTax"]:c5(),["SharedCodec114"]:c6(),["SharedCodec115"]:c7(),["SharedCodec116"]:c8(),["SharedCodec117"]:c9(),["SharedCodec404"]:c10(),["SharedCodec405"]:c11(),["SharedCodec406"]:c12(),["SharedCodec500"]:c13(),["SharedCodec501"]:c14(),["SharedCodec591"]:c15(),["SharedCodec592"]:c16(),["SharedCodec593"]:c17(),["SharedCodec594"]:c18(),["SubscriptionIntervalOption"]:c19(),["SubscriptionPlanLineItemRequest"]:c20(),["TextModifierRequest"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
