import { d1608 as c0, d1609 as c1, d2039 as c2 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1608 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1608;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAllocationPolicy"]:c0(),["InventoryAllocationPolicyConfiguration"]:c1(),["PolicyLocation"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAllocationPolicy(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
