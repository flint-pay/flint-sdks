import { d9319 as c0 } from '../descriptors/data/450.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9330 as c1, d9331 as c2 } from '../descriptors/data/452.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9319 as d9319 } from '../descriptors/data/450.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9319;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnLineDecision"]:c0(),["SharedCodec2106"]:c1(),["SharedCodec2107"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnLineDecision(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
