import { d5547 as c0, d5548 as c1, d5549 as c2 } from '../descriptors/data/249.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4196 as c3 } from '../descriptors/data/173.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4196 as d4196 } from '../descriptors/data/173.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4196;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1396"]:c0(),["SharedCodec1397"]:c1(),["SharedCodec1398"]:c2(),["UpdateInventoryTransferRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
