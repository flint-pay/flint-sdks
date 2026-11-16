import { d136 as c0, d137 as c1 } from '../descriptors/data/6.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d136 as d136 } from '../descriptors/data/6.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d136;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CancelReturnRequest"]:c0(),["CancelReturnResolutionRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCancelReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
