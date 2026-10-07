import { d928 as c0, d77 as c1, d416 as c2, d1874 as c3, d418 as c4, d417 as c5, d415 as c6, d414 as c7, d1977 as c8, d1976 as c9, d2354 as c10, d2353 as c11, d2356 as c12, d2355 as c13, d2398 as c14, d2475 as c15, d2381 as c16, d2515 as c17, d2516 as c18 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2516 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2516;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemModifierRequest"]:c2(),["OrderLineItemTax"]:c3(),["SharedCodec150"]:c4(),["SharedCodec151"]:c5(),["SharedCodec152"]:c6(),["SharedCodec153"]:c7(),["SharedCodec515"]:c8(),["SharedCodec516"]:c9(),["SharedCodec612"]:c10(),["SharedCodec613"]:c11(),["SharedCodec614"]:c12(),["SharedCodec615"]:c13(),["SharedCodec626"]:c14(),["SharedCodec660"]:c15(),["TextModifierRequest"]:c16(),["UpdateSubscriptionPlanLineItemRequest"]:c17(),["UpdateSubscriptionPlanRequest"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
