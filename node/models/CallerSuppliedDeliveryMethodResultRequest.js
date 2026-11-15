import { d6620 as c0 } from '../descriptors/data/305.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6621 as c1, d6625 as c2, d6626 as c4, d6627 as c5, d6628 as c6, d6629 as c7, d6630 as c8, d6631 as c9, d6632 as c10, d6633 as c11, d6634 as c12 } from '../descriptors/data/306.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5786 as c3 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6635 as c13, d6636 as c14 } from '../descriptors/data/307.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6620 as d6620 } from '../descriptors/data/305.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6620;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryMethodResultRequest"]:c0(),["CallerSuppliedDeliveryOutcomeRequest"]:c1(),["DeliveryWindowRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec122"]:c4(),["SharedCodec123"]:c5(),["SharedCodec124"]:c6(),["SharedCodec125"]:c7(),["SharedCodec126"]:c8(),["SharedCodec127"]:c9(),["SharedCodec128"]:c10(),["SharedCodec129"]:c11(),["SharedCodec130"]:c12(),["SharedCodec131"]:c13(),["SharedCodec132"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryMethodResultRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
