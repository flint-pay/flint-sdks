import { d562 as c0, d563 as c1 } from '../descriptors/data/32.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d569 as c2, d570 as c3 } from '../descriptors/data/33.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5786 as c4 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6630 as c5, d6632 as c6, d6633 as c7 } from '../descriptors/data/306.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6636 as c8 } from '../descriptors/data/307.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5265 as c9, d5266 as c10, d5267 as c11 } from '../descriptors/data/230.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5268 as c12, d5269 as c13, d5270 as c14 } from '../descriptors/data/231.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d569 as d569 } from '../descriptors/data/33.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d569;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationMethodOutcome"]:c0(),["DeliveryRateEvaluationOutcome"]:c1(),["DeliveryRateEvaluationResponse"]:c2(),["DeliveryRateEvaluationWindow"]:c3(),["MoneyValue"]:c4(),["SharedCodec126"]:c5(),["SharedCodec128"]:c6(),["SharedCodec129"]:c7(),["SharedCodec132"]:c8(),["SharedCodec633"]:c9(),["SharedCodec634"]:c10(),["SharedCodec635"]:c11(),["SharedCodec636"]:c12(),["SharedCodec637"]:c13(),["SharedCodec638"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
