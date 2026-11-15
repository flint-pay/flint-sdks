import { d1429 as c0 } from '../descriptors/data/67.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7360 as c1, d7361 as c2, d7362 as c3, d7363 as c4, d7364 as c5 } from '../descriptors/data/352.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d1429 as d1429 } from '../descriptors/data/67.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1429;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SaveMeGiftCardRequest"]:c0(),["SharedCodec1528"]:c1(),["SharedCodec1529"]:c2(),["SharedCodec1530"]:c3(),["SharedCodec1531"]:c4(),["SharedCodec1532"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSaveMeGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
