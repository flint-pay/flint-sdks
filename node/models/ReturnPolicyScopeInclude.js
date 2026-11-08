import { d1248 as c0 } from '../descriptors/data/59.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6627 as c1 } from '../descriptors/data/313.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1248 as d1248 } from '../descriptors/data/59.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1248;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnPolicyScopeInclude"]:c0(),["SharedCodec1207"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyScopeInclude(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
