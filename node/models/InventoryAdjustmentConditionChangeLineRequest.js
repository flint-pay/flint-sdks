import { d7016 as c0 } from '../descriptors/data/329.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7032 as c1, d7033 as c2, d7034 as c3, d7035 as c4, d7036 as c5 } from '../descriptors/data/330.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7016 as d7016 } from '../descriptors/data/329.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7016;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAdjustmentConditionChangeLineRequest"]:c0(),["SharedCodec793"]:c1(),["SharedCodec794"]:c2(),["SharedCodec795"]:c3(),["SharedCodec796"]:c4(),["SharedCodec797"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAdjustmentConditionChangeLineRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
