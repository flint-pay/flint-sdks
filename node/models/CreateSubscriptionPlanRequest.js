import { d518 as c0, d928 as c1, d77 as c2, d416 as c3, d1874 as c4, d418 as c5, d417 as c6, d415 as c7, d414 as c8, d1977 as c9, d1976 as c10, d2354 as c11, d2353 as c12, d2356 as c13, d2355 as c14, d2357 as c15, d2381 as c16 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d518 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d518;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPlanRequest"]:c0(),["ImageRequest"]:c1(),["MoneyValue"]:c2(),["OrderLineItemModifierRequest"]:c3(),["OrderLineItemTax"]:c4(),["SharedCodec150"]:c5(),["SharedCodec151"]:c6(),["SharedCodec152"]:c7(),["SharedCodec153"]:c8(),["SharedCodec515"]:c9(),["SharedCodec516"]:c10(),["SharedCodec612"]:c11(),["SharedCodec613"]:c12(),["SharedCodec614"]:c13(),["SharedCodec615"]:c14(),["SubscriptionPlanLineItemRequest"]:c15(),["TextModifierRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
