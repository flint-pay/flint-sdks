import { d50 as c0 } from '../descriptors/data/2.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7277 as c1 } from '../descriptors/data/342.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7324 as c2 } from '../descriptors/data/348.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7497 as c3, d7499 as c4, d7501 as c5, d7505 as c7, d7507 as c8, d7508 as c9 } from '../descriptors/data/358.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7518 as c6, d7509 as c10, d7514 as c12, d7515 as c14, d7519 as c15 } from '../descriptors/data/359.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7439 as c11, d7440 as c13, d7444 as c16, d7445 as c17, d7446 as c18, d7447 as c19 } from '../descriptors/data/356.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d50 as d50 } from '../descriptors/data/2.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d50;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnPreviewRequest"]:c0(),["BuyerCreateReturnResolutionPreviewRequest"]:c1(),["BuyerReturnReplacementLineItemRequest"]:c2(),["CreateReturnEligibilityPreviewRequest"]:c3(),["ReturnEligibilityLineItemRequestModel"]:c4(),["ReturnEligibilitySelectionRequest"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec1446"]:c7(),["SharedCodec1448"]:c8(),["SharedCodec1449"]:c9(),["SharedCodec1450"]:c10(),["SharedCodec50"]:c11(),["SharedCodec51"]:c12(),["SharedCodec52"]:c13(),["SharedCodec53"]:c14(),["SharedCodec54"]:c15(),["SharedCodec91"]:c16(),["SharedCodec92"]:c17(),["SharedCodec93"]:c18(),["SharedCodec94"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
