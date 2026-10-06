import { d914 as c0, d77 as c1, d411 as c2, d1847 as c3, d413 as c4, d412 as c5, d410 as c6, d409 as c7, d1950 as c8, d1949 as c9, d2327 as c10, d2326 as c11, d2329 as c12, d2328 as c13, d2371 as c14, d2448 as c15, d2354 as c16, d2488 as c17, d2489 as c18 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2489 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2489;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemModifierRequest"]:c2(),["OrderLineItemTax"]:c3(),["SharedCodec150"]:c4(),["SharedCodec151"]:c5(),["SharedCodec152"]:c6(),["SharedCodec153"]:c7(),["SharedCodec512"]:c8(),["SharedCodec513"]:c9(),["SharedCodec609"]:c10(),["SharedCodec610"]:c11(),["SharedCodec611"]:c12(),["SharedCodec612"]:c13(),["SharedCodec623"]:c14(),["SharedCodec657"]:c15(),["TextModifierRequest"]:c16(),["UpdateSubscriptionPlanLineItemRequest"]:c17(),["UpdateSubscriptionPlanRequest"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
