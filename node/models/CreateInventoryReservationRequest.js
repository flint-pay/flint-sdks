import { d276 as c0 } from '../descriptors/data/14.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7103 as c1 } from '../descriptors/data/334.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d788 as c2 } from '../descriptors/data/41.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6585 as c3, d6582 as c4, d6583 as c5, d6584 as c6 } from '../descriptors/data/303.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d276 as d276 } from '../descriptors/data/14.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d276;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryReservationRequest"]:c0(),["InventoryReservationOwnerRequest"]:c1(),["InventoryRoutingDemand"]:c2(),["InventoryRoutingSourceRequest"]:c3(),["SharedCodec834"]:c4(),["SharedCodec835"]:c5(),["SharedCodec836"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryReservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
