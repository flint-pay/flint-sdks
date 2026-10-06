import { d513 as c0, d914 as c1, d77 as c2, d411 as c3, d1847 as c4, d413 as c5, d412 as c6, d410 as c7, d409 as c8, d1950 as c9, d1949 as c10, d2327 as c11, d2326 as c12, d2329 as c13, d2328 as c14, d2330 as c15, d2354 as c16 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d513 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d513;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPlanRequest"]:c0(),["ImageRequest"]:c1(),["MoneyValue"]:c2(),["OrderLineItemModifierRequest"]:c3(),["OrderLineItemTax"]:c4(),["SharedCodec150"]:c5(),["SharedCodec151"]:c6(),["SharedCodec152"]:c7(),["SharedCodec153"]:c8(),["SharedCodec512"]:c9(),["SharedCodec513"]:c10(),["SharedCodec609"]:c11(),["SharedCodec610"]:c12(),["SharedCodec611"]:c13(),["SharedCodec612"]:c14(),["SubscriptionPlanLineItemRequest"]:c15(),["TextModifierRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
