import { d350 as c0 } from '../descriptors/data/21.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d350 as d350 } from '../descriptors/data/21.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d350;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReasonRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReasonRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
