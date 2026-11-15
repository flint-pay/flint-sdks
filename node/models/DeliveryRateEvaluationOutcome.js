import { d563 as c0 } from '../descriptors/data/32.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d570 as c1 } from '../descriptors/data/33.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5786 as c2 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6630 as c3, d6632 as c4, d6633 as c5 } from '../descriptors/data/306.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6636 as c6 } from '../descriptors/data/307.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5265 as c7, d5266 as c8, d5267 as c9 } from '../descriptors/data/230.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5268 as c10, d5269 as c11, d5270 as c12 } from '../descriptors/data/231.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d563 as d563 } from '../descriptors/data/32.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d563;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationOutcome"]:c0(),["DeliveryRateEvaluationWindow"]:c1(),["MoneyValue"]:c2(),["SharedCodec126"]:c3(),["SharedCodec128"]:c4(),["SharedCodec129"]:c5(),["SharedCodec132"]:c6(),["SharedCodec633"]:c7(),["SharedCodec634"]:c8(),["SharedCodec635"]:c9(),["SharedCodec636"]:c10(),["SharedCodec637"]:c11(),["SharedCodec638"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
