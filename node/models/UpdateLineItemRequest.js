import { d905 as c0, d77 as c1, d1847 as c2, d416 as c3, d415 as c4, d414 as c5, d1855 as c6, d2451 as c7, d2452 as c8, d2372 as c9, d2373 as c10, d2376 as c11, d2380 as c12, d2453 as c13 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2453 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2453;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardPurchaseRecipient"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedLineItemTax"]:c2(),["OrderLineItemModifierRequest"]:c3(),["SharedCodec152"]:c4(),["SharedCodec153"]:c5(),["SharedCodec492"]:c6(),["SharedCodec652"]:c7(),["SharedCodec653"]:c8(),["TaxCalculationRequest"]:c9(),["TaxComponentRequest"]:c10(),["TaxJurisdiction"]:c11(),["TextModifierRequest"]:c12(),["UpdateLineItemRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
