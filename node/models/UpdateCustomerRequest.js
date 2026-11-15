import { d6328 as c0, d6329 as c7, d6330 as c8 } from '../descriptors/data/290.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6009 as c1, d6010 as c2 } from '../descriptors/data/273.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6317 as c3, d6318 as c12 } from '../descriptors/data/289.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5913 as c4, d5914 as c5, d5912 as c6 } from '../descriptors/data/267.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6286 as c9, d6287 as c10, d6288 as c11 } from '../descriptors/data/288.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5636 as c13 } from '../descriptors/data/246.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5636 as d5636 } from '../descriptors/data/246.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5636;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DocumentTaxIDRequest"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2(),["SharedCodec1000"]:c3(),["SharedCodec1678"]:c4(),["SharedCodec1679"]:c5(),["SharedCodec1680"]:c6(),["SharedCodec1685"]:c7(),["SharedCodec1686"]:c8(),["SharedCodec1687"]:c9(),["SharedCodec1688"]:c10(),["SharedCodec1689"]:c11(),["SharedCodec999"]:c12(),["UpdateCustomerRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCustomerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
