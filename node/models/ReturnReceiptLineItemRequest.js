import { d8428 as c0, d8429 as c2, d8430 as c3, d8431 as c4, d8432 as c5, d8433 as c6, d8434 as c7 } from '../descriptors/data/413.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8444 as c1 } from '../descriptors/data/414.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8428 as d8428 } from '../descriptors/data/413.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8428;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemRequest"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec1491"]:c2(),["SharedCodec1492"]:c3(),["SharedCodec1493"]:c4(),["SharedCodec1494"]:c5(),["SharedCodec1495"]:c6(),["SharedCodec1496"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
