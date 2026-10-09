import { d867 as c0, d323 as c1, d1848 as c2, d371 as c3, d370 as c4, d369 as c5, d1858 as c6, d2487 as c7, d2488 as c8, d2489 as c9, d2490 as c10, d2337 as c11, d2407 as c12, d2408 as c13, d2411 as c14, d2415 as c15, d2491 as c16 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2491 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2491;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardPurchaseRecipient"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedLineItemTax"]:c2(),["OrderLineItemModifierRequest"]:c3(),["SharedCodec116"]:c4(),["SharedCodec117"]:c5(),["SharedCodec473"]:c6(),["SharedCodec629"]:c7(),["SharedCodec630"]:c8(),["SharedCodec631"]:c9(),["SharedCodec632"]:c10(),["SubscribedLineRequest"]:c11(),["TaxCalculationRequest"]:c12(),["TaxComponentRequest"]:c13(),["TaxJurisdiction"]:c14(),["TextModifierRequest"]:c15(),["UpdateLineItemRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
