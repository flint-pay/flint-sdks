import { d5786 as c0 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8202 as c1, d8205 as c2, d8209 as c3, d8210 as c4, d8211 as c5, d8213 as c6, d8214 as c7, d8215 as c8, d8216 as c9, d8217 as c10, d8218 as c11, d8219 as c12, d8220 as c13 } from '../descriptors/data/399.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7491 as c14, d7492 as c15, d7493 as c16, d7494 as c17, d7495 as c18 } from '../descriptors/data/358.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8226 as c19, d8227 as c20, d8228 as c21, d8229 as c22, d8230 as c25, d8231 as c26, d8232 as c27, d8233 as c28, d8234 as c29, d8235 as c30 } from '../descriptors/data/400.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5914 as c23 } from '../descriptors/data/267.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6010 as c24 } from '../descriptors/data/273.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5681 as c31 } from '../descriptors/data/249.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5681 as d5681 } from '../descriptors/data/249.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5681;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodPatch"]:c1(),["PromotionCombinesWithPatch"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec1329"]:c6(),["SharedCodec1330"]:c7(),["SharedCodec1331"]:c8(),["SharedCodec1332"]:c9(),["SharedCodec1333"]:c10(),["SharedCodec1334"]:c11(),["SharedCodec1335"]:c12(),["SharedCodec1336"]:c13(),["SharedCodec1337"]:c14(),["SharedCodec1338"]:c15(),["SharedCodec1339"]:c16(),["SharedCodec1340"]:c17(),["SharedCodec1341"]:c18(),["SharedCodec1369"]:c19(),["SharedCodec1370"]:c20(),["SharedCodec1371"]:c21(),["SharedCodec1372"]:c22(),["SharedCodec1680"]:c23(),["SharedCodec1683"]:c24(),["SharedCodec1771"]:c25(),["SharedCodec1772"]:c26(),["SharedCodec1773"]:c27(),["SharedCodec1774"]:c28(),["SharedCodec1775"]:c29(),["SharedCodec1776"]:c30(),["UpdatePromotionRequest"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
