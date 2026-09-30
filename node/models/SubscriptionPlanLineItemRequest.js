import { d69 as c0, d359 as c1, d1687 as c2, d361 as c3, d360 as c4, d358 as c5, d357 as c6, d367 as c7, d366 as c8, d2147 as c9, d2146 as c10, d2149 as c11, d2148 as c12, d2150 as c13, d2174 as c14 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2150 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2150;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemModifierRequest"]:c1(),["OrderLineItemTax"]:c2(),["SharedCodec126"]:c3(),["SharedCodec127"]:c4(),["SharedCodec128"]:c5(),["SharedCodec129"]:c6(),["SharedCodec134"]:c7(),["SharedCodec135"]:c8(),["SharedCodec546"]:c9(),["SharedCodec547"]:c10(),["SharedCodec548"]:c11(),["SharedCodec549"]:c12(),["SubscriptionPlanLineItemRequest"]:c13(),["TextModifierRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
