import { d7497 as c0, d7499 as c6, d7501 as c7, d7505 as c12, d7507 as c13, d7508 as c14 } from '../descriptors/data/358.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d346 as c1 } from '../descriptors/data/21.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8390 as c2 } from '../descriptors/data/410.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6579 as c3, d6580 as c4 } from '../descriptors/data/303.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5786 as c5 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8406 as c8, d8402 as c9, d8408 as c16, d8409 as c17, d8410 as c18, d8400 as c25, d8403 as c26, d8401 as c27, d8404 as c28, d8405 as c29 } from '../descriptors/data/411.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7518 as c10, d7509 as c15, d7515 as c30, d7519 as c31 } from '../descriptors/data/359.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6695 as c11 } from '../descriptors/data/310.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8411 as c19, d8412 as c20, d8413 as c21, d8414 as c22, d8415 as c23, d8416 as c24 } from '../descriptors/data/412.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d346 as d346 } from '../descriptors/data/21.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d346;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["CreateReturnPreviewRequestResolution"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["LineItemFulfillmentOriginRequestModel"]:c3(),["LineItemFulfillmentRequestModel"]:c4(),["MoneyValue"]:c5(),["ReturnEligibilityLineItemRequestModel"]:c6(),["ReturnEligibilitySelectionRequest"]:c7(),["ReturnReplacementLineItemRequest"]:c8(),["ReturnResolutionAdjustmentRequest"]:c9(),["ReturnResolutionLineItemRequest"]:c10(),["SharedCodec116"]:c11(),["SharedCodec1446"]:c12(),["SharedCodec1448"]:c13(),["SharedCodec1449"]:c14(),["SharedCodec1450"]:c15(),["SharedCodec1508"]:c16(),["SharedCodec1509"]:c17(),["SharedCodec1510"]:c18(),["SharedCodec1511"]:c19(),["SharedCodec1512"]:c20(),["SharedCodec1513"]:c21(),["SharedCodec1514"]:c22(),["SharedCodec1515"]:c23(),["SharedCodec398"]:c24(),["SharedCodec399"]:c25(),["SharedCodec400"]:c26(),["SharedCodec401"]:c27(),["SharedCodec402"]:c28(),["SharedCodec403"]:c29(),["SharedCodec53"]:c30(),["SharedCodec54"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequestResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
