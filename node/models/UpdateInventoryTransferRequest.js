import { d7145 as c0, d7146 as c1, d7147 as c2 } from '../descriptors/data/336.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5682 as c3 } from '../descriptors/data/248.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5682 as d5682 } from '../descriptors/data/248.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5682;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1716"]:c0(),["SharedCodec1717"]:c1(),["SharedCodec1718"]:c2(),["UpdateInventoryTransferRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
