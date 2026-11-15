import { d5786 as c0 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8202 as c1, d8209 as c2, d8210 as c3, d8211 as c4, d8213 as c5, d8214 as c6, d8215 as c7, d8216 as c8, d8217 as c9, d8218 as c10, d8219 as c11, d8220 as c12 } from '../descriptors/data/399.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7491 as c13, d7492 as c14, d7493 as c15, d7494 as c16, d7495 as c17 } from '../descriptors/data/358.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8226 as c18, d8227 as c19, d8228 as c20, d8229 as c21 } from '../descriptors/data/400.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8202 as d8202 } from '../descriptors/data/399.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8202;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodPatch"]:c1(),["PromotionRuleGroupRequest"]:c2(),["PromotionRuleRequest"]:c3(),["PromotionRuleValueRequest"]:c4(),["SharedCodec1329"]:c5(),["SharedCodec1330"]:c6(),["SharedCodec1331"]:c7(),["SharedCodec1332"]:c8(),["SharedCodec1333"]:c9(),["SharedCodec1334"]:c10(),["SharedCodec1335"]:c11(),["SharedCodec1336"]:c12(),["SharedCodec1337"]:c13(),["SharedCodec1338"]:c14(),["SharedCodec1339"]:c15(),["SharedCodec1340"]:c16(),["SharedCodec1341"]:c17(),["SharedCodec1369"]:c18(),["SharedCodec1370"]:c19(),["SharedCodec1371"]:c20(),["SharedCodec1372"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
