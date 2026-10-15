import { d481 as c0, d42 as c1, d323 as c2, d2056 as c3, d2289 as c4, d2340 as c5, d92 as c6, d765 as c7, d2034 as c8 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d481 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d481;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateShipmentResult"]:c0(),["ExpandedOrderSummary"]:c1(),["MoneyValue"]:c2(),["PricingAmounts"]:c3(),["ReturnShipmentLineItemAllocation"]:c4(),["SettlementAmounts"]:c5(),["SharedCodec17"]:c6(),["Shipment"]:c7(),["SignedMoney"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateShipmentResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
