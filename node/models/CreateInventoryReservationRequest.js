import { d353 as c0, d1592 as c1, d1620 as c2, d1624 as c3, d1629 as c4, d1626 as c5, d1627 as c6, d1628 as c7 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d353 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d353;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryReservationRequest"]:c0(),["InventoryAssignment"]:c1(),["InventoryReservationOwner"]:c2(),["InventoryRoutingDemand"]:c3(),["InventoryRoutingSourceRequest"]:c4(),["SharedCodec403"]:c5(),["SharedCodec404"]:c6(),["SharedCodec405"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryReservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
