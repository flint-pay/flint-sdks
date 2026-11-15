import { d5786 as c0 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8351 as c1, d8353 as c2, d8355 as c3, d8357 as c4, d8359 as c5 } from '../descriptors/data/408.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8362 as c6, d8363 as c7, d8364 as c8, d8365 as c9, d8366 as c10, d8367 as c11, d8368 as c12, d8369 as c13, d8370 as c14, d8371 as c15, d8372 as c16, d8373 as c17, d8374 as c18, d8375 as c19, d8376 as c20 } from '../descriptors/data/409.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8351 as d8351 } from '../descriptors/data/408.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8351;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec1473"]:c6(),["SharedCodec1474"]:c7(),["SharedCodec1475"]:c8(),["SharedCodec1476"]:c9(),["SharedCodec1477"]:c10(),["SharedCodec1478"]:c11(),["SharedCodec1479"]:c12(),["SharedCodec1480"]:c13(),["SharedCodec1481"]:c14(),["SharedCodec1482"]:c15(),["SharedCodec1483"]:c16(),["SharedCodec1484"]:c17(),["SharedCodec1485"]:c18(),["SharedCodec1486"]:c19(),["SharedCodec1487"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
