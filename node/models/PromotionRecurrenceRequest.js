import { d8208 as c0 } from '../descriptors/data/399.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7491 as c1, d7492 as c2, d7493 as c3, d7494 as c4, d7495 as c5 } from '../descriptors/data/358.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8208 as d8208 } from '../descriptors/data/399.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8208;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrenceRequest"]:c0(),["SharedCodec1337"]:c1(),["SharedCodec1338"]:c2(),["SharedCodec1339"]:c3(),["SharedCodec1340"]:c4(),["SharedCodec1341"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrenceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
