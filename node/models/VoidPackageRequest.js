import { d4260 as c0, d4261 as c1 } from '../descriptors/data/178.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4260 as d4260 } from '../descriptors/data/178.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4260;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["VoidPackageRequest"]:c0(),["VoidShipmentRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVoidPackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
