import { d672 as c0 } from '../descriptors/data/34.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5438 as c1, d5439 as c2, d5440 as c3, d5441 as c4, d5442 as c5 } from '../descriptors/data/244.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d672 as d672 } from '../descriptors/data/34.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d672;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAdjustmentConditionChangeLineRequest"]:c0(),["SharedCodec631"]:c1(),["SharedCodec632"]:c2(),["SharedCodec633"]:c3(),["SharedCodec634"]:c4(),["SharedCodec635"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAdjustmentConditionChangeLineRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
