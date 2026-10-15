import { d872 as c0, d323 as c1, d1851 as c2, d371 as c3, d370 as c4, d369 as c5, d2503 as c6, d2504 as c7, d2505 as c8, d2506 as c9, d2353 as c10, d2423 as c11, d2424 as c12, d2427 as c13, d2431 as c14, d2507 as c15 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2507 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2507;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardPurchaseRecipient"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedLineItemTax"]:c2(),["OrderLineItemModifierRequest"]:c3(),["SharedCodec116"]:c4(),["SharedCodec117"]:c5(),["SharedCodec634"]:c6(),["SharedCodec635"]:c7(),["SharedCodec636"]:c8(),["SharedCodec637"]:c9(),["SubscribedLineRequest"]:c10(),["TaxCalculationRequest"]:c11(),["TaxComponentRequest"]:c12(),["TaxJurisdiction"]:c13(),["TextModifierRequest"]:c14(),["UpdateLineItemRequest"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
