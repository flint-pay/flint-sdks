import { d4541 as c0, d4539 as c4, d4540 as c5 } from '../descriptors/data/194.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d244 as c1 } from '../descriptors/data/12.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5702 as c2 } from '../descriptors/data/257.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4429 as c3 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d244 as d244 } from '../descriptors/data/12.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d244;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateLocationRequest"]:c1(),["LocationCoordinateRequest"]:c2(),["MetadataRequest"]:c3(),["SharedCodec0"]:c4(),["SharedCodec1"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
