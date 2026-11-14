import { d277 as c0 } from '../descriptors/data/15.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7074 as c1 } from '../descriptors/data/334.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d786 as c2 } from '../descriptors/data/41.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6553 as c3, d6550 as c4, d6551 as c5, d6552 as c6 } from '../descriptors/data/303.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d277 as d277 } from '../descriptors/data/15.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d277;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryReservationRequest"]:c0(),["InventoryReservationOwnerRequest"]:c1(),["InventoryRoutingDemand"]:c2(),["InventoryRoutingSourceRequest"]:c3(),["SharedCodec836"]:c4(),["SharedCodec837"]:c5(),["SharedCodec838"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryReservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
