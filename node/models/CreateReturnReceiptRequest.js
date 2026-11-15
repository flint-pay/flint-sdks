import { d350 as c0 } from '../descriptors/data/21.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8431 as c1, d8432 as c7, d8433 as c8, d8434 as c9, d8435 as c10, d8436 as c11, d8437 as c12 } from '../descriptors/data/413.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8341 as c2, d8344 as c4, d8345 as c5, d8346 as c6 } from '../descriptors/data/407.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8447 as c3 } from '../descriptors/data/414.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7017 as c13 } from '../descriptors/data/330.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d350 as d350 } from '../descriptors/data/21.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d350;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReceiptRequest"]:c0(),["ReturnReceiptLineItemRequest"]:c1(),["ReturnSourceSystemRequest"]:c2(),["ReturnUnverifiedItem"]:c3(),["SharedCodec1453"]:c4(),["SharedCodec1454"]:c5(),["SharedCodec1455"]:c6(),["SharedCodec1491"]:c7(),["SharedCodec1492"]:c8(),["SharedCodec1493"]:c9(),["SharedCodec1494"]:c10(),["SharedCodec1495"]:c11(),["SharedCodec1496"]:c12(),["SharedCodec298"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
