import { d365 as c0 } from '../descriptors/data/22.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5865 as c1, d5866 as c4, d5867 as c5 } from '../descriptors/data/263.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5812 as c2 } from '../descriptors/data/260.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8583 as c3, d8584 as c6, d8585 as c7 } from '../descriptors/data/422.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d365 as d365 } from '../descriptors/data/22.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d365;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSandboxRequest"]:c0(),["SharedCodec185"]:c1(),["SharedCodec3"]:c2(),["SharedCodec417"]:c3(),["SharedCodec418"]:c4(),["SharedCodec419"]:c5(),["SharedCodec420"]:c6(),["SharedCodec421"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSandboxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
