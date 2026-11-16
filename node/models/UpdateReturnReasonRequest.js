import { d9255 as c0 } from '../descriptors/data/446.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6519 as c1 } from '../descriptors/data/283.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6519 as d6519 } from '../descriptors/data/283.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6519;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2503"]:c0(),["UpdateReturnReasonRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnReasonRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
