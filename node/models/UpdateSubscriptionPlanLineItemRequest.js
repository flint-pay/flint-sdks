import { d77 as c0, d416 as c1, d1874 as c2, d418 as c3, d417 as c4, d415 as c5, d414 as c6, d1977 as c7, d1976 as c8, d2354 as c9, d2353 as c10, d2356 as c11, d2355 as c12, d2381 as c13, d2515 as c14 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2515 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2515;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemModifierRequest"]:c1(),["OrderLineItemTax"]:c2(),["SharedCodec150"]:c3(),["SharedCodec151"]:c4(),["SharedCodec152"]:c5(),["SharedCodec153"]:c6(),["SharedCodec515"]:c7(),["SharedCodec516"]:c8(),["SharedCodec612"]:c9(),["SharedCodec613"]:c10(),["SharedCodec614"]:c11(),["SharedCodec615"]:c12(),["TextModifierRequest"]:c13(),["UpdateSubscriptionPlanLineItemRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
