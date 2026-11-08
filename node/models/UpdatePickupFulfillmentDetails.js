import { d4539 as c0, d4540 as c1 } from '../descriptors/data/194.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4852 as c2, d4853 as c3 } from '../descriptors/data/212.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4218 as c4 } from '../descriptors/data/175.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4218 as d4218 } from '../descriptors/data/175.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4218;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec0"]:c0(),["SharedCodec1"]:c1(),["SharedCodec843"]:c2(),["SharedCodec844"]:c3(),["UpdatePickupFulfillmentDetails"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePickupFulfillmentDetails(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
