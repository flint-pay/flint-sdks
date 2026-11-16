import { d134 as c0 } from '../descriptors/data/6.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d134 as d134 } from '../descriptors/data/6.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d134;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CancelReturnLineItemRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCancelReturnLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
