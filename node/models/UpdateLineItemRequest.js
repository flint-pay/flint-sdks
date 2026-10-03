import { d886 as c0, d74 as c1, d1811 as c2, d407 as c3, d406 as c4, d405 as c5, d1819 as c6, d2413 as c7, d2414 as c8, d2334 as c9, d2335 as c10, d2338 as c11, d2342 as c12, d2415 as c13 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2415 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2415;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardPurchaseRecipient"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedLineItemTax"]:c2(),["OrderLineItemModifierRequest"]:c3(),["SharedCodec149"]:c4(),["SharedCodec150"]:c5(),["SharedCodec482"]:c6(),["SharedCodec638"]:c7(),["SharedCodec639"]:c8(),["TaxCalculationRequest"]:c9(),["TaxComponentRequest"]:c10(),["TaxJurisdiction"]:c11(),["TextModifierRequest"]:c12(),["UpdateLineItemRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
