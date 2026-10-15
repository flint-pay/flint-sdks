import { d353 as c0, d1594 as c1, d1622 as c2, d1626 as c3, d1631 as c4, d1628 as c5, d1629 as c6, d1630 as c7 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d353 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d353;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryReservationRequest"]:c0(),["InventoryAssignment"]:c1(),["InventoryReservationOwner"]:c2(),["InventoryRoutingDemand"]:c3(),["InventoryRoutingSourceRequest"]:c4(),["SharedCodec404"]:c5(),["SharedCodec405"]:c6(),["SharedCodec406"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryReservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
