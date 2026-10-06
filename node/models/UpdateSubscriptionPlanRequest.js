import { d928 as c0, d77 as c1, d416 as c2, d1873 as c3, d418 as c4, d417 as c5, d415 as c6, d414 as c7, d1976 as c8, d1975 as c9, d2353 as c10, d2352 as c11, d2355 as c12, d2354 as c13, d2397 as c14, d2474 as c15, d2380 as c16, d2514 as c17, d2515 as c18 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2515 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2515;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemModifierRequest"]:c2(),["OrderLineItemTax"]:c3(),["SharedCodec150"]:c4(),["SharedCodec151"]:c5(),["SharedCodec152"]:c6(),["SharedCodec153"]:c7(),["SharedCodec514"]:c8(),["SharedCodec515"]:c9(),["SharedCodec611"]:c10(),["SharedCodec612"]:c11(),["SharedCodec613"]:c12(),["SharedCodec614"]:c13(),["SharedCodec625"]:c14(),["SharedCodec659"]:c15(),["TextModifierRequest"]:c16(),["UpdateSubscriptionPlanLineItemRequest"]:c17(),["UpdateSubscriptionPlanRequest"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
