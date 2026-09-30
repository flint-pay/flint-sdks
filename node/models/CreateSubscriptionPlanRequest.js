import { d461 as c0, d813 as c1, d69 as c2, d359 as c3, d1687 as c4, d361 as c5, d360 as c6, d358 as c7, d357 as c8, d367 as c9, d366 as c10, d2147 as c11, d2146 as c12, d2149 as c13, d2148 as c14, d2150 as c15, d2174 as c16 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d461 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d461;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPlanRequest"]:c0(),["ImageRequest"]:c1(),["MoneyValue"]:c2(),["OrderLineItemModifierRequest"]:c3(),["OrderLineItemTax"]:c4(),["SharedCodec126"]:c5(),["SharedCodec127"]:c6(),["SharedCodec128"]:c7(),["SharedCodec129"]:c8(),["SharedCodec134"]:c9(),["SharedCodec135"]:c10(),["SharedCodec546"]:c11(),["SharedCodec547"]:c12(),["SharedCodec548"]:c13(),["SharedCodec549"]:c14(),["SubscriptionPlanLineItemRequest"]:c15(),["TextModifierRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
