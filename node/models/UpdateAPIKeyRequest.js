import { d5849 as c0, d5850 as c1 } from '../descriptors/data/262.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5863 as c2, d5864 as c4, d5865 as c5 } from '../descriptors/data/263.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5810 as c3 } from '../descriptors/data/260.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5629 as c6 } from '../descriptors/data/245.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5629 as d5629 } from '../descriptors/data/245.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5629;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1676"]:c0(),["SharedCodec1677"]:c1(),["SharedCodec185"]:c2(),["SharedCodec3"]:c3(),["SharedCodec418"]:c4(),["SharedCodec419"]:c5(),["UpdateAPIKeyRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
