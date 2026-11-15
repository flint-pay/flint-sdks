import { d6579 as c0, d6580 as c1 } from '../descriptors/data/303.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5913 as c2 } from '../descriptors/data/267.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5786 as c3 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8491 as c4 } from '../descriptors/data/417.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8406 as c5, d8408 as c7, d8409 as c8, d8410 as c9 } from '../descriptors/data/411.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6695 as c6 } from '../descriptors/data/310.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8411 as c10, d8412 as c11, d8413 as c12, d8414 as c13, d8415 as c14, d8416 as c15 } from '../descriptors/data/412.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8479 as c16 } from '../descriptors/data/416.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8491 as d8491 } from '../descriptors/data/417.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8491;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["ReturnProcessResolutionRequest"]:c4(),["ReturnReplacementLineItemRequest"]:c5(),["SharedCodec116"]:c6(),["SharedCodec1508"]:c7(),["SharedCodec1509"]:c8(),["SharedCodec1510"]:c9(),["SharedCodec1511"]:c10(),["SharedCodec1512"]:c11(),["SharedCodec1513"]:c12(),["SharedCodec1514"]:c13(),["SharedCodec1515"]:c14(),["SharedCodec398"]:c15(),["SharedCodec404"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnProcessResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
