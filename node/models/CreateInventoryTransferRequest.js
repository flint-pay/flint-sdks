import { d277 as c0 } from '../descriptors/data/14.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7131 as c1 } from '../descriptors/data/335.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d277 as d277 } from '../descriptors/data/14.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d277;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryTransferRequest"]:c0(),["InventoryTransferLineRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
