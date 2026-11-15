import { d5786 as c0 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8209 as c1, d8210 as c2, d8211 as c3, d8214 as c4, d8215 as c5, d8216 as c6, d8217 as c7, d8218 as c8 } from '../descriptors/data/399.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8226 as c9, d8227 as c10, d8228 as c11, d8229 as c12 } from '../descriptors/data/400.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8209 as d8209 } from '../descriptors/data/399.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8209;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRuleGroupRequest"]:c1(),["PromotionRuleRequest"]:c2(),["PromotionRuleValueRequest"]:c3(),["SharedCodec1330"]:c4(),["SharedCodec1331"]:c5(),["SharedCodec1332"]:c6(),["SharedCodec1333"]:c7(),["SharedCodec1334"]:c8(),["SharedCodec1369"]:c9(),["SharedCodec1370"]:c10(),["SharedCodec1371"]:c11(),["SharedCodec1372"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
