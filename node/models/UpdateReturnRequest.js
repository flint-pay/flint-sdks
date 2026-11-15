import { d5914 as c0 } from '../descriptors/data/267.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6010 as c1 } from '../descriptors/data/273.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5693 as c2 } from '../descriptors/data/250.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5693 as d5693 } from '../descriptors/data/250.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5693;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1680"]:c0(),["SharedCodec1683"]:c1(),["UpdateReturnRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
