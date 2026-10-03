import { d375 as c0, d1576 as c1, d1604 as c2, d1607 as c3, d1611 as c4, d1608 as c5, d1609 as c6, d1610 as c7 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d375 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d375;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryReservationRequest"]:c0(),["InventoryAssignment"]:c1(),["InventoryReservationOwner"]:c2(),["InventoryRoutingDemand"]:c3(),["InventoryRoutingSourceRequest"]:c4(),["SharedCodec423"]:c5(),["SharedCodec424"]:c6(),["SharedCodec425"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryReservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
