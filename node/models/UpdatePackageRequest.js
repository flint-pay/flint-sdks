import { d5914 as c0 } from '../descriptors/data/267.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6010 as c1 } from '../descriptors/data/273.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7835 as c2, d7836 as c3, d7837 as c4, d7838 as c5 } from '../descriptors/data/376.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5668 as c6 } from '../descriptors/data/248.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5668 as d5668 } from '../descriptors/data/248.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5668;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1680"]:c0(),["SharedCodec1683"]:c1(),["SharedCodec1743"]:c2(),["SharedCodec1744"]:c3(),["SharedCodec1745"]:c4(),["SharedCodec1746"]:c5(),["UpdatePackageRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
