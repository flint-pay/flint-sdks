import { d813 as c0, d69 as c1, d359 as c2, d1687 as c3, d361 as c4, d360 as c5, d358 as c6, d357 as c7, d367 as c8, d366 as c9, d2147 as c10, d2146 as c11, d2149 as c12, d2148 as c13, d2188 as c14, d2261 as c15, d2174 as c16, d2301 as c17, d2302 as c18 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2302 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2302;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemModifierRequest"]:c2(),["OrderLineItemTax"]:c3(),["SharedCodec126"]:c4(),["SharedCodec127"]:c5(),["SharedCodec128"]:c6(),["SharedCodec129"]:c7(),["SharedCodec134"]:c8(),["SharedCodec135"]:c9(),["SharedCodec546"]:c10(),["SharedCodec547"]:c11(),["SharedCodec548"]:c12(),["SharedCodec549"]:c13(),["SharedCodec559"]:c14(),["SharedCodec591"]:c15(),["TextModifierRequest"]:c16(),["UpdateSubscriptionPlanLineItemRequest"]:c17(),["UpdateSubscriptionPlanRequest"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
