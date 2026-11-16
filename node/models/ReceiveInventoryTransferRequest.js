import { d7126 as c0, d7135 as c3, d7136 as c4, d7137 as c5, d7138 as c6, d7139 as c7 } from '../descriptors/data/335.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7046 as c1, d7047 as c9, d7048 as c10, d7049 as c11, d7045 as c12, d7042 as c13, d7043 as c14, d7044 as c15 } from '../descriptors/data/331.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1301 as c2 } from '../descriptors/data/62.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7140 as c8 } from '../descriptors/data/336.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1301 as d1301 } from '../descriptors/data/62.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1301;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["ReceiveInventoryTransferRequest"]:c2(),["SharedCodec1390"]:c3(),["SharedCodec1391"]:c4(),["SharedCodec1392"]:c5(),["SharedCodec1393"]:c6(),["SharedCodec1394"]:c7(),["SharedCodec1395"]:c8(),["SharedCodec295"]:c9(),["SharedCodec296"]:c10(),["SharedCodec297"]:c11(),["SharedCodec298"]:c12(),["SharedCodec790"]:c13(),["SharedCodec791"]:c14(),["SharedCodec792"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReceiveInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
