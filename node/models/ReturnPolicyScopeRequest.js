import { d9187 as c0 } from '../descriptors/data/442.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9207 as c1, d9208 as c2, d9209 as c3, d9210 as c4 } from '../descriptors/data/443.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9187 as d9187 } from '../descriptors/data/442.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9187;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnPolicyScopeRequest"]:c0(),["SharedCodec2124"]:c1(),["SharedCodec2125"]:c2(),["SharedCodec2126"]:c3(),["SharedCodec2127"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyScopeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
