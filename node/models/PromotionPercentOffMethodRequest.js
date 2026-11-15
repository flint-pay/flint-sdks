import { d5786 as c0 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d1269 as c1 } from '../descriptors/data/61.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8208 as c2, d8209 as c3, d8210 as c4, d8211 as c5, d8214 as c6, d8215 as c7, d8216 as c8, d8217 as c9, d8218 as c10 } from '../descriptors/data/399.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7491 as c11, d7492 as c12, d7493 as c13, d7494 as c14, d7495 as c15 } from '../descriptors/data/358.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8226 as c16, d8227 as c17, d8228 as c18, d8229 as c19 } from '../descriptors/data/400.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d1269 as d1269 } from '../descriptors/data/61.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1269;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionPercentOffMethodRequest"]:c1(),["PromotionRecurrenceRequest"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec1330"]:c6(),["SharedCodec1331"]:c7(),["SharedCodec1332"]:c8(),["SharedCodec1333"]:c9(),["SharedCodec1334"]:c10(),["SharedCodec1337"]:c11(),["SharedCodec1338"]:c12(),["SharedCodec1339"]:c13(),["SharedCodec1340"]:c14(),["SharedCodec1341"]:c15(),["SharedCodec1369"]:c16(),["SharedCodec1370"]:c17(),["SharedCodec1371"]:c18(),["SharedCodec1372"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionPercentOffMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
