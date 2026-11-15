import { d326 as c0 } from '../descriptors/data/19.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5913 as c1 } from '../descriptors/data/267.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5786 as c2 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8203 as c3, d8204 as c4, d8206 as c5, d8207 as c6, d8208 as c7, d8209 as c8, d8210 as c9, d8211 as c10, d8212 as c11, d8214 as c12, d8215 as c13, d8216 as c14, d8217 as c15, d8218 as c16, d8221 as c22, d8222 as c23 } from '../descriptors/data/399.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7491 as c17, d7492 as c18, d7493 as c19, d7494 as c20, d7495 as c21 } from '../descriptors/data/358.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8223 as c24, d8226 as c25, d8227 as c26, d8228 as c27, d8229 as c28 } from '../descriptors/data/400.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d326 as d326 } from '../descriptors/data/19.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d326;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["PromotionApplicationMethodRequest"]:c3(),["PromotionCodeRequest"]:c4(),["PromotionCombinesWithRequest"]:c5(),["PromotionExclusivityRequest"]:c6(),["PromotionRecurrenceRequest"]:c7(),["PromotionRuleGroupRequest"]:c8(),["PromotionRuleRequest"]:c9(),["PromotionRuleValueRequest"]:c10(),["PromotionScheduleRequest"]:c11(),["SharedCodec1330"]:c12(),["SharedCodec1331"]:c13(),["SharedCodec1332"]:c14(),["SharedCodec1333"]:c15(),["SharedCodec1334"]:c16(),["SharedCodec1337"]:c17(),["SharedCodec1338"]:c18(),["SharedCodec1339"]:c19(),["SharedCodec1340"]:c20(),["SharedCodec1341"]:c21(),["SharedCodec1342"]:c22(),["SharedCodec1343"]:c23(),["SharedCodec1344"]:c24(),["SharedCodec1369"]:c25(),["SharedCodec1370"]:c26(),["SharedCodec1371"]:c27(),["SharedCodec1372"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
