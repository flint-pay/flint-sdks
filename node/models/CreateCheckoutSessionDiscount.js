import { d5949 as c0 } from '../descriptors/data/269.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6114 as c1, d6115 as c2, d6116 as c3 } from '../descriptors/data/279.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5949 as d5949 } from '../descriptors/data/269.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5949;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCheckoutSessionDiscount"]:c0(),["PromotionRefInputPromotionCode"]:c1(),["PromotionRefInputPromotionID"]:c2(),["PromotionRefRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionDiscount(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
