import { d6579 as c0, d6580 as c1 } from '../descriptors/data/303.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5786 as c2 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6695 as c3 } from '../descriptors/data/310.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8408 as c4, d8409 as c5, d8410 as c6 } from '../descriptors/data/411.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8411 as c7, d8412 as c8 } from '../descriptors/data/412.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5914 as c9 } from '../descriptors/data/267.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6010 as c10 } from '../descriptors/data/273.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6254 as c11 } from '../descriptors/data/286.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8448 as c12, d8449 as c13, d8450 as c14, d8451 as c15, d8452 as c16 } from '../descriptors/data/414.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8473 as c17, d8474 as c18 } from '../descriptors/data/415.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8475 as c19 } from '../descriptors/data/416.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5694 as c20 } from '../descriptors/data/250.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5694 as d5694 } from '../descriptors/data/250.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5694;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MoneyValue"]:c2(),["SharedCodec116"]:c3(),["SharedCodec1508"]:c4(),["SharedCodec1509"]:c5(),["SharedCodec1510"]:c6(),["SharedCodec1511"]:c7(),["SharedCodec1512"]:c8(),["SharedCodec1680"]:c9(),["SharedCodec1683"]:c10(),["SharedCodec1684"]:c11(),["SharedCodec1778"]:c12(),["SharedCodec1779"]:c13(),["SharedCodec1780"]:c14(),["SharedCodec1781"]:c15(),["SharedCodec1782"]:c16(),["UpdateReturnReplacementLineItemRequest"]:c17(),["UpdateReturnResolutionAdjustmentRequest"]:c18(),["UpdateReturnResolutionLineItemRequest"]:c19(),["UpdateReturnResolutionRequest"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
