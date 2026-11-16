import { d271 as c0 } from '../descriptors/data/14.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7016 as c1 } from '../descriptors/data/329.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7018 as c2, d7020 as c3, d7025 as c9, d7026 as c10, d7027 as c11, d7028 as c12, d7029 as c13, d7030 as c14, d7031 as c15, d7032 as c19, d7033 as c20, d7034 as c21, d7035 as c22, d7036 as c23 } from '../descriptors/data/330.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7046 as c4, d7047 as c5, d7048 as c6, d7049 as c7, d7045 as c8, d7042 as c16, d7043 as c17, d7044 as c18 } from '../descriptors/data/331.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d271 as d271 } from '../descriptors/data/14.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d271;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventoryAdjustmentQuantityLineRequest"]:c2(),["InventoryAdjustmentSetLineRequest"]:c3(),["InventorySourceSystemRequest"]:c4(),["SharedCodec295"]:c5(),["SharedCodec296"]:c6(),["SharedCodec297"]:c7(),["SharedCodec298"]:c8(),["SharedCodec299"]:c9(),["SharedCodec300"]:c10(),["SharedCodec301"]:c11(),["SharedCodec302"]:c12(),["SharedCodec303"]:c13(),["SharedCodec304"]:c14(),["SharedCodec305"]:c15(),["SharedCodec790"]:c16(),["SharedCodec791"]:c17(),["SharedCodec792"]:c18(),["SharedCodec793"]:c19(),["SharedCodec794"]:c20(),["SharedCodec795"]:c21(),["SharedCodec796"]:c22(),["SharedCodec797"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
