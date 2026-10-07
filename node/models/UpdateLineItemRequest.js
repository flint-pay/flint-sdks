import { d911 as c0, d77 as c1, d1854 as c2, d417 as c3, d416 as c4, d415 as c5, d1862 as c6, d2458 as c7, d2459 as c8, d2379 as c9, d2380 as c10, d2383 as c11, d2387 as c12, d2460 as c13 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2460 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2460;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardPurchaseRecipient"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedLineItemTax"]:c2(),["OrderLineItemModifierRequest"]:c3(),["SharedCodec152"]:c4(),["SharedCodec153"]:c5(),["SharedCodec497"]:c6(),["SharedCodec657"]:c7(),["SharedCodec658"]:c8(),["TaxCalculationRequest"]:c9(),["TaxComponentRequest"]:c10(),["TaxJurisdiction"]:c11(),["TextModifierRequest"]:c12(),["UpdateLineItemRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
