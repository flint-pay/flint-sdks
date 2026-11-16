import { d203 as c0 } from '../descriptors/data/9.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6744 as c1 } from '../descriptors/data/300.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d203 as d203 } from '../descriptors/data/9.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d203;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCategoryRequest"]:c0(),["MetadataRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCategoryRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
