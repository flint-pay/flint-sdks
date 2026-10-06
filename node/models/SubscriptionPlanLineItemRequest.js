import { d77 as c0, d416 as c1, d1873 as c2, d418 as c3, d417 as c4, d415 as c5, d414 as c6, d1976 as c7, d1975 as c8, d2353 as c9, d2352 as c10, d2355 as c11, d2354 as c12, d2356 as c13, d2380 as c14 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2356 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2356;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemModifierRequest"]:c1(),["OrderLineItemTax"]:c2(),["SharedCodec150"]:c3(),["SharedCodec151"]:c4(),["SharedCodec152"]:c5(),["SharedCodec153"]:c6(),["SharedCodec514"]:c7(),["SharedCodec515"]:c8(),["SharedCodec611"]:c9(),["SharedCodec612"]:c10(),["SharedCodec613"]:c11(),["SharedCodec614"]:c12(),["SubscriptionPlanLineItemRequest"]:c13(),["TextModifierRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
