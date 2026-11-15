import { d6323 as c0 } from '../descriptors/data/290.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7235 as c1 } from '../descriptors/data/340.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7243 as c2, d7244 as c3, d7245 as c4, d7246 as c5, d7247 as c6, d7248 as c7, d7249 as c8 } from '../descriptors/data/341.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6158 as c9, d6159 as c10, d6160 as c11, d6161 as c12 } from '../descriptors/data/281.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7235 as d7235 } from '../descriptors/data/340.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7235;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["OrderTaxExemptionRequest"]:c1(),["SharedCodec1089"]:c2(),["SharedCodec1090"]:c3(),["SharedCodec1091"]:c4(),["SharedCodec1092"]:c5(),["SharedCodec1093"]:c6(),["SharedCodec1094"]:c7(),["SharedCodec1095"]:c8(),["SharedCodec492"]:c9(),["SharedCodec493"]:c10(),["SharedCodec494"]:c11(),["SharedCodec495"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
