import { d4541 as c0, d4539 as c1, d4540 as c2, d4542 as c4 } from '../descriptors/data/194.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4430 as c3 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5270 as c5, d5271 as c6, d5272 as c7, d5273 as c8, d5274 as c9, d5275 as c10 } from '../descriptors/data/235.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5276 as c11, d5277 as c12, d5278 as c13, d5279 as c14 } from '../descriptors/data/236.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4852 as c15, d4853 as c16 } from '../descriptors/data/212.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4189 as c17 } from '../descriptors/data/173.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4189 as d4189 } from '../descriptors/data/173.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4189;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2(),["SharedCodec1368"]:c3(),["SharedCodec1371"]:c4(),["SharedCodec1386"]:c5(),["SharedCodec1387"]:c6(),["SharedCodec1388"]:c7(),["SharedCodec1389"]:c8(),["SharedCodec1390"]:c9(),["SharedCodec1391"]:c10(),["SharedCodec1392"]:c11(),["SharedCodec1393"]:c12(),["SharedCodec1394"]:c13(),["SharedCodec1395"]:c14(),["SharedCodec843"]:c15(),["SharedCodec844"]:c16(),["UpdateFulfillmentRequest"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
