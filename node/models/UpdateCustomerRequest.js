import { d6330 as c0, d6321 as c3, d6331 as c7, d6332 as c8, d6322 as c12 } from '../descriptors/data/290.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6011 as c1, d6012 as c2 } from '../descriptors/data/273.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5915 as c4, d5916 as c5, d5914 as c6 } from '../descriptors/data/267.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6289 as c9, d6290 as c10, d6291 as c11 } from '../descriptors/data/288.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5638 as c13 } from '../descriptors/data/245.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5638 as d5638 } from '../descriptors/data/245.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5638;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DocumentTaxIDRequest"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2(),["SharedCodec1000"]:c3(),["SharedCodec1678"]:c4(),["SharedCodec1679"]:c5(),["SharedCodec1680"]:c6(),["SharedCodec1685"]:c7(),["SharedCodec1686"]:c8(),["SharedCodec1687"]:c9(),["SharedCodec1688"]:c10(),["SharedCodec1689"]:c11(),["SharedCodec999"]:c12(),["UpdateCustomerRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCustomerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
