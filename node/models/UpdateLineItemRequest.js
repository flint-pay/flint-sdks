import { d69 as c0, d1671 as c1, d359 as c2, d358 as c3, d357 as c4, d1679 as c5, d2166 as c6, d2167 as c7, d2170 as c8, d2174 as c9, d2240 as c10 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2240 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2240;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderCalculatedLineItemTax"]:c1(),["OrderLineItemModifierRequest"]:c2(),["SharedCodec128"]:c3(),["SharedCodec129"]:c4(),["SharedCodec441"]:c5(),["TaxCalculationRequest"]:c6(),["TaxComponentRequest"]:c7(),["TaxJurisdiction"]:c8(),["TextModifierRequest"]:c9(),["UpdateLineItemRequest"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
