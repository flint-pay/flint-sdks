import { d77 as c0, d411 as c1, d1847 as c2, d413 as c3, d412 as c4, d410 as c5, d409 as c6, d1950 as c7, d1949 as c8, d2327 as c9, d2326 as c10, d2329 as c11, d2328 as c12, d2354 as c13, d2488 as c14 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2488 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2488;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemModifierRequest"]:c1(),["OrderLineItemTax"]:c2(),["SharedCodec150"]:c3(),["SharedCodec151"]:c4(),["SharedCodec152"]:c5(),["SharedCodec153"]:c6(),["SharedCodec512"]:c7(),["SharedCodec513"]:c8(),["SharedCodec609"]:c9(),["SharedCodec610"]:c10(),["SharedCodec611"]:c11(),["SharedCodec612"]:c12(),["TextModifierRequest"]:c13(),["UpdateSubscriptionPlanLineItemRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
