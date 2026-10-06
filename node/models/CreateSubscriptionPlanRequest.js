import { d518 as c0, d928 as c1, d77 as c2, d416 as c3, d1873 as c4, d418 as c5, d417 as c6, d415 as c7, d414 as c8, d1976 as c9, d1975 as c10, d2353 as c11, d2352 as c12, d2355 as c13, d2354 as c14, d2356 as c15, d2380 as c16 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d518 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d518;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPlanRequest"]:c0(),["ImageRequest"]:c1(),["MoneyValue"]:c2(),["OrderLineItemModifierRequest"]:c3(),["OrderLineItemTax"]:c4(),["SharedCodec150"]:c5(),["SharedCodec151"]:c6(),["SharedCodec152"]:c7(),["SharedCodec153"]:c8(),["SharedCodec514"]:c9(),["SharedCodec515"]:c10(),["SharedCodec611"]:c11(),["SharedCodec612"]:c12(),["SharedCodec613"]:c13(),["SharedCodec614"]:c14(),["SubscriptionPlanLineItemRequest"]:c15(),["TextModifierRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
