import { d6552 as c0 } from '../descriptors/data/285.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6552 as d6552 } from '../descriptors/data/285.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6552;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["WaiveReturnLineInspectionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWaiveReturnLineInspectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
