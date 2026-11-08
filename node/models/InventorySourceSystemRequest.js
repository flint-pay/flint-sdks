import { d5451 as c0, d5450 as c1, d5447 as c2, d5448 as c3, d5449 as c4 } from '../descriptors/data/244.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5451 as d5451 } from '../descriptors/data/244.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5451;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventorySourceSystemRequest"]:c0(),["SharedCodec233"]:c1(),["SharedCodec628"]:c2(),["SharedCodec629"]:c3(),["SharedCodec630"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventorySourceSystemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
