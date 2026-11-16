import { d267 as c0 } from '../descriptors/data/14.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7016 as c1 } from '../descriptors/data/329.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7046 as c2, d7047 as c3, d7048 as c4, d7049 as c5, d7045 as c6, d7042 as c7, d7043 as c8, d7044 as c9 } from '../descriptors/data/331.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7032 as c10, d7033 as c11, d7034 as c12, d7035 as c13, d7036 as c14 } from '../descriptors/data/330.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d267 as d267 } from '../descriptors/data/14.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d267;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentConditionChangeRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec295"]:c3(),["SharedCodec296"]:c4(),["SharedCodec297"]:c5(),["SharedCodec298"]:c6(),["SharedCodec790"]:c7(),["SharedCodec791"]:c8(),["SharedCodec792"]:c9(),["SharedCodec793"]:c10(),["SharedCodec794"]:c11(),["SharedCodec795"]:c12(),["SharedCodec796"]:c13(),["SharedCodec797"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentConditionChangeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
