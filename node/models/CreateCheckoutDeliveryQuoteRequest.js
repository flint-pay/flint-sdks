import { d6620 as c0 } from '../descriptors/data/305.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6621 as c1, d6625 as c7, d6626 as c9, d6627 as c10, d6628 as c11, d6629 as c12, d6630 as c13, d6631 as c14, d6632 as c15, d6633 as c16, d6634 as c17 } from '../descriptors/data/306.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d202 as c2 } from '../descriptors/data/9.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6540 as c3 } from '../descriptors/data/301.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6541 as c4, d6546 as c5, d6542 as c20, d6547 as c21, d6548 as c22, d6543 as c23, d6544 as c24 } from '../descriptors/data/302.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d476 as c6 } from '../descriptors/data/28.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5786 as c8 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6635 as c18, d6636 as c19 } from '../descriptors/data/307.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d202 as d202 } from '../descriptors/data/9.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d202;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryMethodResultRequest"]:c0(),["CallerSuppliedDeliveryOutcomeRequest"]:c1(),["CreateCheckoutDeliveryQuoteRequest"]:c2(),["DeliveryAddressRequest"]:c3(),["DeliveryBuyerLocationRequest"]:c4(),["DeliveryCoordinateRequest"]:c5(),["DeliveryInventoryAssignmentRequest"]:c6(),["DeliveryWindowRequest"]:c7(),["MoneyValue"]:c8(),["SharedCodec122"]:c9(),["SharedCodec123"]:c10(),["SharedCodec124"]:c11(),["SharedCodec125"]:c12(),["SharedCodec126"]:c13(),["SharedCodec127"]:c14(),["SharedCodec128"]:c15(),["SharedCodec129"]:c16(),["SharedCodec130"]:c17(),["SharedCodec131"]:c18(),["SharedCodec132"]:c19(),["SharedCodec508"]:c20(),["SharedCodec509"]:c21(),["SharedCodec510"]:c22(),["SharedCodec511"]:c23(),["SharedCodec512"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutDeliveryQuoteRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
