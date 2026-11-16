import { d7046 as c0, d7045 as c1, d7042 as c2, d7043 as c3, d7044 as c4 } from '../descriptors/data/331.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7046 as d7046 } from '../descriptors/data/331.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7046;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventorySourceSystemRequest"]:c0(),["SharedCodec298"]:c1(),["SharedCodec790"]:c2(),["SharedCodec791"]:c3(),["SharedCodec792"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventorySourceSystemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
