import { d379 as c0, d1580 as c1, d1608 as c2, d1611 as c3, d1615 as c4, d1612 as c5, d1613 as c6, d1614 as c7 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d379 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d379;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryReservationRequest"]:c0(),["InventoryAssignment"]:c1(),["InventoryReservationOwner"]:c2(),["InventoryRoutingDemand"]:c3(),["InventoryRoutingSourceRequest"]:c4(),["SharedCodec428"]:c5(),["SharedCodec429"]:c6(),["SharedCodec430"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryReservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
