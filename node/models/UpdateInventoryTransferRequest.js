import { d2452 as c0, d2451 as c1, d2448 as c2, d2449 as c3, d2450 as c4, d2453 as c5 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2453 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2453;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec650"]:c0(),["SharedCodec651"]:c1(),["SharedCodec652"]:c2(),["SharedCodec653"]:c3(),["SharedCodec654"]:c4(),["UpdateInventoryTransferRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
