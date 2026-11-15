import { d8390 as c0 } from '../descriptors/data/410.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6579 as c1, d6580 as c2 } from '../descriptors/data/303.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5786 as c3 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8406 as c4, d8402 as c5, d8408 as c8, d8409 as c9, d8410 as c10, d8400 as c17, d8403 as c18, d8401 as c19, d8404 as c20, d8405 as c21 } from '../descriptors/data/411.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7518 as c6, d7519 as c22 } from '../descriptors/data/359.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6695 as c7 } from '../descriptors/data/310.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8411 as c11, d8412 as c12, d8413 as c13, d8414 as c14, d8415 as c15, d8416 as c16 } from '../descriptors/data/412.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8390 as d8390 } from '../descriptors/data/410.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8390;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionPreviewRequest"]:c0(),["LineItemFulfillmentOriginRequestModel"]:c1(),["LineItemFulfillmentRequestModel"]:c2(),["MoneyValue"]:c3(),["ReturnReplacementLineItemRequest"]:c4(),["ReturnResolutionAdjustmentRequest"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec116"]:c7(),["SharedCodec1508"]:c8(),["SharedCodec1509"]:c9(),["SharedCodec1510"]:c10(),["SharedCodec1511"]:c11(),["SharedCodec1512"]:c12(),["SharedCodec1513"]:c13(),["SharedCodec1514"]:c14(),["SharedCodec1515"]:c15(),["SharedCodec398"]:c16(),["SharedCodec399"]:c17(),["SharedCodec400"]:c18(),["SharedCodec401"]:c19(),["SharedCodec402"]:c20(),["SharedCodec403"]:c21(),["SharedCodec54"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
