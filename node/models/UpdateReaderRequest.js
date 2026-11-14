import { d5912 as c0 } from '../descriptors/data/267.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6008 as c1 } from '../descriptors/data/273.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5680 as c2 } from '../descriptors/data/250.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5680 as d5680 } from '../descriptors/data/250.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5680;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1680"]:c0(),["SharedCodec1683"]:c1(),["UpdateReaderRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReaderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
