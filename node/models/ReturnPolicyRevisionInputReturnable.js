import { d5786 as c0 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d1371 as c1 } from '../descriptors/data/65.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8353 as c2, d8355 as c3, d8357 as c4, d8359 as c5 } from '../descriptors/data/408.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8364 as c6, d8365 as c7, d8366 as c8, d8367 as c9, d8368 as c10, d8369 as c11, d8370 as c12, d8373 as c13, d8374 as c14, d8375 as c15, d8376 as c16 } from '../descriptors/data/409.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d1371 as d1371 } from '../descriptors/data/65.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1371;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputReturnable"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec1475"]:c6(),["SharedCodec1476"]:c7(),["SharedCodec1477"]:c8(),["SharedCodec1478"]:c9(),["SharedCodec1479"]:c10(),["SharedCodec1480"]:c11(),["SharedCodec1481"]:c12(),["SharedCodec1484"]:c13(),["SharedCodec1485"]:c14(),["SharedCodec1486"]:c15(),["SharedCodec1487"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputReturnable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
