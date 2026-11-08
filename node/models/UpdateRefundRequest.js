import { d4430 as c0 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4542 as c1 } from '../descriptors/data/194.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4225 as c2 } from '../descriptors/data/176.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4225 as d4225 } from '../descriptors/data/176.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4225;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1368"]:c0(),["SharedCodec1371"]:c1(),["UpdateRefundRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
