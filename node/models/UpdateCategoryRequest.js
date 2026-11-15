import { d5913 as c0, d5914 as c1, d5912 as c2 } from '../descriptors/data/267.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5631 as c3 } from '../descriptors/data/245.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5631 as d5631 } from '../descriptors/data/245.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5631;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1678"]:c0(),["SharedCodec1679"]:c1(),["SharedCodec1680"]:c2(),["UpdateCategoryRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCategoryRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
