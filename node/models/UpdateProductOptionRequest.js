import { d8987 as c0 } from '../descriptors/data/430.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9006 as c1, d9007 as c2 } from '../descriptors/data/431.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9006 as d9006 } from '../descriptors/data/431.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9006;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2495"]:c0(),["UpdateProductOptionRequest"]:c1(),["UpdateProductOptionValueRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductOptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
