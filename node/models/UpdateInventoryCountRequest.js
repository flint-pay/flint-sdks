import { d7067 as c0 } from '../descriptors/data/332.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7046 as c1, d7047 as c2, d7048 as c3, d7049 as c4, d7045 as c5, d7042 as c6, d7043 as c7, d7044 as c8 } from '../descriptors/data/331.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5678 as c9 } from '../descriptors/data/248.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5678 as d5678 } from '../descriptors/data/248.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5678;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryCountObservationRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["SharedCodec295"]:c2(),["SharedCodec296"]:c3(),["SharedCodec297"]:c4(),["SharedCodec298"]:c5(),["SharedCodec790"]:c6(),["SharedCodec791"]:c7(),["SharedCodec792"]:c8(),["UpdateInventoryCountRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryCountRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
