import { d599 as c0 } from '../descriptors/data/34.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7126 as c1 } from '../descriptors/data/335.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7046 as c2, d7047 as c3, d7048 as c4, d7049 as c5, d7045 as c6, d7042 as c9, d7043 as c10, d7044 as c11 } from '../descriptors/data/331.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7161 as c7, d7162 as c8 } from '../descriptors/data/336.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d599 as d599 } from '../descriptors/data/34.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d599;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DepartInventoryTransferRequest"]:c0(),["InventoryProvenanceRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec295"]:c3(),["SharedCodec296"]:c4(),["SharedCodec297"]:c5(),["SharedCodec298"]:c6(),["SharedCodec672"]:c7(),["SharedCodec673"]:c8(),["SharedCodec790"]:c9(),["SharedCodec791"]:c10(),["SharedCodec792"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDepartInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
