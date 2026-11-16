import { d7126 as c0 } from '../descriptors/data/335.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7046 as c1, d7047 as c5, d7048 as c6, d7049 as c7, d7045 as c8, d7042 as c9, d7043 as c10, d7044 as c11 } from '../descriptors/data/331.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1377 as c2 } from '../descriptors/data/65.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7143 as c3, d7144 as c4 } from '../descriptors/data/336.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1377 as d1377 } from '../descriptors/data/65.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1377;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["ReturnInventoryTransferToOriginRequest"]:c2(),["SharedCodec1471"]:c3(),["SharedCodec1472"]:c4(),["SharedCodec295"]:c5(),["SharedCodec296"]:c6(),["SharedCodec297"]:c7(),["SharedCodec298"]:c8(),["SharedCodec790"]:c9(),["SharedCodec791"]:c10(),["SharedCodec792"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnInventoryTransferToOriginRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
