import { d1247 as c0 } from '../descriptors/data/59.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6625 as c1 } from '../descriptors/data/313.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1247 as d1247 } from '../descriptors/data/59.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1247;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnPolicyScopeAll"]:c0(),["SharedCodec1205"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyScopeAll(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
