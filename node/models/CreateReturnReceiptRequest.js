import { d349 as c0 } from '../descriptors/data/21.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8428 as c1, d8429 as c7, d8430 as c8, d8431 as c9, d8432 as c10, d8433 as c11, d8434 as c12 } from '../descriptors/data/413.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8338 as c2, d8341 as c4, d8342 as c5, d8343 as c6 } from '../descriptors/data/407.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8444 as c3 } from '../descriptors/data/414.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7015 as c13 } from '../descriptors/data/330.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d349 as d349 } from '../descriptors/data/21.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d349;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReceiptRequest"]:c0(),["ReturnReceiptLineItemRequest"]:c1(),["ReturnSourceSystemRequest"]:c2(),["ReturnUnverifiedItem"]:c3(),["SharedCodec1453"]:c4(),["SharedCodec1454"]:c5(),["SharedCodec1455"]:c6(),["SharedCodec1491"]:c7(),["SharedCodec1492"]:c8(),["SharedCodec1493"]:c9(),["SharedCodec1494"]:c10(),["SharedCodec1495"]:c11(),["SharedCodec1496"]:c12(),["SharedCodec298"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
