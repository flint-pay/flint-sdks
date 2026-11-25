import { d8003 as c0 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8352 as c1 } from '../descriptors/data/369.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10529 as c2, d10534 as c3 } from '../descriptors/data/495.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10535 as c4, d10536 as c5, d10537 as c6, d10541 as c8, d10542 as c9, d10543 as c10, d10544 as c11, d10545 as c12, d10548 as c18, d10549 as c19, d10550 as c20, d10553 as c21, d10554 as c22, d10555 as c23, d10556 as c24 } from '../descriptors/data/496.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10350 as c7 } from '../descriptors/data/485.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9781 as c13, d9782 as c14, d9783 as c15 } from '../descriptors/data/451.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9784 as c16, d9785 as c17 } from '../descriptors/data/452.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10529 as d10529 } from '../descriptors/data/495.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10529;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PlatformFeeMoney"]:c1(),["PromotionApplicationMethodRequest"]:c2(),["PromotionRecurrenceRequest"]:c3(),["PromotionRuleGroupRequest"]:c4(),["PromotionRuleRequest"]:c5(),["PromotionRuleValueRequest"]:c6(),["SharedCodec2451"]:c7(),["SharedCodec2457"]:c8(),["SharedCodec2458"]:c9(),["SharedCodec2459"]:c10(),["SharedCodec2460"]:c11(),["SharedCodec2461"]:c12(),["SharedCodec2464"]:c13(),["SharedCodec2465"]:c14(),["SharedCodec2466"]:c15(),["SharedCodec2467"]:c16(),["SharedCodec2468"]:c17(),["SharedCodec2470"]:c18(),["SharedCodec2471"]:c19(),["SharedCodec2472"]:c20(),["SharedCodec2531"]:c21(),["SharedCodec2532"]:c22(),["SharedCodec2533"]:c23(),["SharedCodec2534"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
