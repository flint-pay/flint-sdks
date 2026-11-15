import { d6621 as c0, d6625 as c1, d6626 as c3, d6627 as c4, d6628 as c5, d6629 as c6, d6630 as c7, d6631 as c8, d6632 as c9, d6633 as c10, d6634 as c11 } from '../descriptors/data/306.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5786 as c2 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6635 as c12, d6636 as c13 } from '../descriptors/data/307.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6621 as d6621 } from '../descriptors/data/306.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6621;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryOutcomeRequest"]:c0(),["DeliveryWindowRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec122"]:c3(),["SharedCodec123"]:c4(),["SharedCodec124"]:c5(),["SharedCodec125"]:c6(),["SharedCodec126"]:c7(),["SharedCodec127"]:c8(),["SharedCodec128"]:c9(),["SharedCodec129"]:c10(),["SharedCodec130"]:c11(),["SharedCodec131"]:c12(),["SharedCodec132"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryOutcomeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
