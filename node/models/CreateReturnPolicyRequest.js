import { d340 as c0 } from '../descriptors/data/21.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5913 as c1 } from '../descriptors/data/267.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5786 as c2 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8351 as c3, d8353 as c4, d8355 as c5, d8357 as c6, d8359 as c7 } from '../descriptors/data/408.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8362 as c8, d8363 as c9, d8364 as c10, d8365 as c11, d8366 as c12, d8367 as c13, d8368 as c14, d8369 as c15, d8370 as c16, d8371 as c17, d8372 as c18, d8373 as c19, d8374 as c20, d8375 as c21, d8376 as c22 } from '../descriptors/data/409.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d340 as d340 } from '../descriptors/data/21.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d340;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnPolicyRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["ReturnPolicyRevisionRequest"]:c3(),["ReturnPolicyScopeRequest"]:c4(),["ReturnRestockingFeePolicyRequest"]:c5(),["ReturnShippingPolicyRequest"]:c6(),["ReturnWindowRequest"]:c7(),["SharedCodec1473"]:c8(),["SharedCodec1474"]:c9(),["SharedCodec1475"]:c10(),["SharedCodec1476"]:c11(),["SharedCodec1477"]:c12(),["SharedCodec1478"]:c13(),["SharedCodec1479"]:c14(),["SharedCodec1480"]:c15(),["SharedCodec1481"]:c16(),["SharedCodec1482"]:c17(),["SharedCodec1483"]:c18(),["SharedCodec1484"]:c19(),["SharedCodec1485"]:c20(),["SharedCodec1486"]:c21(),["SharedCodec1487"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
