import { d479 as c0, d891 as c1, d1629 as c2, d323 as c3, d371 as c4, d1875 as c5, d373 as c6, d372 as c7, d370 as c8, d369 as c9, d1626 as c10, d1627 as c11, d1628 as c12, d1981 as c13, d1980 as c14, d2381 as c15, d2380 as c16, d2383 as c17, d2382 as c18, d2365 as c19, d2384 as c20, d2415 as c21 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d479 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d479;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPlanRequest"]:c0(),["ImageRequest"]:c1(),["InventoryRoutingSourceRequest"]:c2(),["MoneyValue"]:c3(),["OrderLineItemModifierRequest"]:c4(),["OrderLineItemTax"]:c5(),["SharedCodec114"]:c6(),["SharedCodec115"]:c7(),["SharedCodec116"]:c8(),["SharedCodec117"]:c9(),["SharedCodec403"]:c10(),["SharedCodec404"]:c11(),["SharedCodec405"]:c12(),["SharedCodec495"]:c13(),["SharedCodec496"]:c14(),["SharedCodec586"]:c15(),["SharedCodec587"]:c16(),["SharedCodec588"]:c17(),["SharedCodec589"]:c18(),["SubscriptionIntervalOption"]:c19(),["SubscriptionPlanLineItemRequest"]:c20(),["TextModifierRequest"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
