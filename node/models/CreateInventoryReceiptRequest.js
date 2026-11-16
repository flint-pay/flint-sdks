import { d275 as c0 } from '../descriptors/data/14.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7093 as c1 } from '../descriptors/data/333.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7046 as c2, d7047 as c3, d7048 as c4, d7049 as c5, d7045 as c6, d7042 as c7, d7043 as c8, d7044 as c9 } from '../descriptors/data/331.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d275 as d275 } from '../descriptors/data/14.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d275;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryReceiptRequest"]:c0(),["InventoryReceiptLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec295"]:c3(),["SharedCodec296"]:c4(),["SharedCodec297"]:c5(),["SharedCodec298"]:c6(),["SharedCodec790"]:c7(),["SharedCodec791"]:c8(),["SharedCodec792"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
