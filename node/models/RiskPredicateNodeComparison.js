import { d6824 as c0 } from '../descriptors/data/324.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6832 as c1 } from '../descriptors/data/325.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6824 as d6824 } from '../descriptors/data/324.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6824;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RiskPredicateNodeComparison"]:c0(),["SharedCodec1258"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNodeComparison(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
