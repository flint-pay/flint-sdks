import { d323 as c0, d371 as c1, d1875 as c2, d373 as c3, d372 as c4, d370 as c5, d369 as c6, d1981 as c7, d1980 as c8, d2381 as c9, d2380 as c10, d2383 as c11, d2382 as c12, d2415 as c13, d2556 as c14 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2556 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2556;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemModifierRequest"]:c1(),["OrderLineItemTax"]:c2(),["SharedCodec114"]:c3(),["SharedCodec115"]:c4(),["SharedCodec116"]:c5(),["SharedCodec117"]:c6(),["SharedCodec495"]:c7(),["SharedCodec496"]:c8(),["SharedCodec586"]:c9(),["SharedCodec587"]:c10(),["SharedCodec588"]:c11(),["SharedCodec589"]:c12(),["TextModifierRequest"]:c13(),["UpdateSubscriptionPlanLineItemRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
