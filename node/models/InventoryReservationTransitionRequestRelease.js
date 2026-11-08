import { d731 as c0 } from '../descriptors/data/36.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5535 as c1, d5536 as c2 } from '../descriptors/data/248.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d731 as d731 } from '../descriptors/data/36.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d731;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryReservationTransitionRequestRelease"]:c0(),["SharedCodec672"]:c1(),["SharedCodec673"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationTransitionRequestRelease(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
