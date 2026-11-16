import { d1383 as c0 } from '../descriptors/data/66.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9210 as c1 } from '../descriptors/data/443.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d1383 as d1383 } from '../descriptors/data/66.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1383;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnPolicyScopeIncludeRequest"]:c0(),["SharedCodec2127"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyScopeIncludeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
