import { d891 as c0, d1629 as c1, d323 as c2, d371 as c3, d1875 as c4, d373 as c5, d372 as c6, d370 as c7, d369 as c8, d1626 as c9, d1627 as c10, d1628 as c11, d1981 as c12, d1980 as c13, d2381 as c14, d2380 as c15, d2383 as c16, d2382 as c17, d2433 as c18, d2513 as c19, d2365 as c20, d2415 as c21, d2556 as c22, d2557 as c23 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2557 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2557;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageRequest"]:c0(),["InventoryRoutingSourceRequest"]:c1(),["MoneyValue"]:c2(),["OrderLineItemModifierRequest"]:c3(),["OrderLineItemTax"]:c4(),["SharedCodec114"]:c5(),["SharedCodec115"]:c6(),["SharedCodec116"]:c7(),["SharedCodec117"]:c8(),["SharedCodec403"]:c9(),["SharedCodec404"]:c10(),["SharedCodec405"]:c11(),["SharedCodec495"]:c12(),["SharedCodec496"]:c13(),["SharedCodec586"]:c14(),["SharedCodec587"]:c15(),["SharedCodec588"]:c16(),["SharedCodec589"]:c17(),["SharedCodec602"]:c18(),["SharedCodec638"]:c19(),["SubscriptionIntervalOption"]:c20(),["TextModifierRequest"]:c21(),["UpdateSubscriptionPlanLineItemRequest"]:c22(),["UpdateSubscriptionPlanRequest"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
