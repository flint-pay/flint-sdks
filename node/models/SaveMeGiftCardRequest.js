import { d1428 as c0 } from '../descriptors/data/68.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7358 as c1, d7359 as c2, d7360 as c3, d7361 as c4, d7362 as c5 } from '../descriptors/data/352.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d1428 as d1428 } from '../descriptors/data/68.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1428;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SaveMeGiftCardRequest"]:c0(),["SharedCodec1528"]:c1(),["SharedCodec1529"]:c2(),["SharedCodec1530"]:c3(),["SharedCodec1531"]:c4(),["SharedCodec1532"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSaveMeGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
