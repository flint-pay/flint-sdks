import { d892 as c0, d77 as c1, d1821 as c2, d411 as c3, d410 as c4, d409 as c5, d1829 as c6, d2425 as c7, d2426 as c8, d2346 as c9, d2347 as c10, d2350 as c11, d2354 as c12, d2427 as c13 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2427 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2427;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardPurchaseRecipient"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedLineItemTax"]:c2(),["OrderLineItemModifierRequest"]:c3(),["SharedCodec152"]:c4(),["SharedCodec153"]:c5(),["SharedCodec490"]:c6(),["SharedCodec650"]:c7(),["SharedCodec651"]:c8(),["TaxCalculationRequest"]:c9(),["TaxComponentRequest"]:c10(),["TaxJurisdiction"]:c11(),["TextModifierRequest"]:c12(),["UpdateLineItemRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
