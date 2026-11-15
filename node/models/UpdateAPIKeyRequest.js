import { d5851 as c0, d5852 as c1 } from '../descriptors/data/262.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5865 as c2, d5866 as c4, d5867 as c5 } from '../descriptors/data/263.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5812 as c3 } from '../descriptors/data/260.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5631 as c6 } from '../descriptors/data/245.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5631 as d5631 } from '../descriptors/data/245.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5631;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1676"]:c0(),["SharedCodec1677"]:c1(),["SharedCodec185"]:c2(),["SharedCodec3"]:c3(),["SharedCodec418"]:c4(),["SharedCodec419"]:c5(),["UpdateAPIKeyRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
