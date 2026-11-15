import { d5915 as c0, d5916 as c1, d5914 as c2 } from '../descriptors/data/267.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5633 as c3 } from '../descriptors/data/245.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5633 as d5633 } from '../descriptors/data/245.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5633;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1678"]:c0(),["SharedCodec1679"]:c1(),["SharedCodec1680"]:c2(),["UpdateCategoryRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCategoryRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
