import { d232 as c0 } from '../descriptors/data/11.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5482 as c1, d5508 as c4, d5509 as c5, d5510 as c6 } from '../descriptors/data/247.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d727 as c2 } from '../descriptors/data/36.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6890 as c3 } from '../descriptors/data/327.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d232 as d232 } from '../descriptors/data/11.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d232;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryReservationRequest"]:c0(),["InventoryReservationOwnerRequest"]:c1(),["InventoryRoutingDemand"]:c2(),["InventoryRoutingSourceRequest"]:c3(),["SharedCodec672"]:c4(),["SharedCodec673"]:c5(),["SharedCodec674"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryReservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
