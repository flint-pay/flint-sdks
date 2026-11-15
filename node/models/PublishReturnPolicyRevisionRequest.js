import { d5786 as c0 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d1282 as c1 } from '../descriptors/data/61.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8351 as c2, d8353 as c3, d8355 as c4, d8357 as c5, d8359 as c6 } from '../descriptors/data/408.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8362 as c7, d8363 as c8, d8364 as c9, d8365 as c10, d8366 as c11, d8367 as c12, d8368 as c13, d8369 as c14, d8370 as c15, d8371 as c16, d8372 as c17, d8373 as c18, d8374 as c19, d8375 as c20, d8376 as c21 } from '../descriptors/data/409.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d1282 as d1282 } from '../descriptors/data/61.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1282;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublishReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScopeRequest"]:c3(),["ReturnRestockingFeePolicyRequest"]:c4(),["ReturnShippingPolicyRequest"]:c5(),["ReturnWindowRequest"]:c6(),["SharedCodec1473"]:c7(),["SharedCodec1474"]:c8(),["SharedCodec1475"]:c9(),["SharedCodec1476"]:c10(),["SharedCodec1477"]:c11(),["SharedCodec1478"]:c12(),["SharedCodec1479"]:c13(),["SharedCodec1480"]:c14(),["SharedCodec1481"]:c15(),["SharedCodec1482"]:c16(),["SharedCodec1483"]:c17(),["SharedCodec1484"]:c18(),["SharedCodec1485"]:c19(),["SharedCodec1486"]:c20(),["SharedCodec1487"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
