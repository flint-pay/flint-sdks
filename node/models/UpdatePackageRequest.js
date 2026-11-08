import { d4430 as c0 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4542 as c1 } from '../descriptors/data/194.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6205 as c2, d6206 as c3, d6207 as c4, d6208 as c5 } from '../descriptors/data/287.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4211 as c6 } from '../descriptors/data/174.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4211 as d4211 } from '../descriptors/data/174.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4211;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1368"]:c0(),["SharedCodec1371"]:c1(),["SharedCodec1421"]:c2(),["SharedCodec1422"]:c3(),["SharedCodec1423"]:c4(),["SharedCodec1424"]:c5(),["UpdatePackageRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
