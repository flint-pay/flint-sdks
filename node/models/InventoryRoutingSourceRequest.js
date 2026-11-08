import { d6949 as c0 } from '../descriptors/data/330.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5539 as c1, d5540 as c2, d5541 as c3 } from '../descriptors/data/248.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6949 as d6949 } from '../descriptors/data/330.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6949;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryRoutingSourceRequest"]:c0(),["SharedCodec674"]:c1(),["SharedCodec675"]:c2(),["SharedCodec676"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryRoutingSourceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
