import { d8431 as c0, d8432 as c2, d8433 as c3, d8434 as c4, d8435 as c5, d8436 as c6, d8437 as c7 } from '../descriptors/data/413.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8447 as c1 } from '../descriptors/data/414.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8431 as d8431 } from '../descriptors/data/413.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8431;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemRequest"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec1491"]:c2(),["SharedCodec1492"]:c3(),["SharedCodec1493"]:c4(),["SharedCodec1494"]:c5(),["SharedCodec1495"]:c6(),["SharedCodec1496"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
