import { d368 as c0 } from '../descriptors/data/22.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8131 as c1 } from '../descriptors/data/356.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8003 as c2 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8352 as c3 } from '../descriptors/data/369.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10529 as c4, d10530 as c5, d10532 as c6, d10533 as c7, d10534 as c8 } from '../descriptors/data/495.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10535 as c9, d10536 as c10, d10537 as c11, d10538 as c12, d10541 as c14, d10542 as c15, d10543 as c16, d10544 as c17, d10545 as c18, d10548 as c24, d10549 as c25, d10550 as c26, d10553 as c27, d10554 as c28, d10555 as c29, d10556 as c30 } from '../descriptors/data/496.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10350 as c13 } from '../descriptors/data/485.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9781 as c19, d9782 as c20, d9783 as c21 } from '../descriptors/data/451.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9784 as c22, d9785 as c23 } from '../descriptors/data/452.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d368 as d368 } from '../descriptors/data/22.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d368;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["PlatformFeeMoney"]:c3(),["PromotionApplicationMethodRequest"]:c4(),["PromotionCodeRequest"]:c5(),["PromotionCombinesWithRequest"]:c6(),["PromotionExclusivityRequest"]:c7(),["PromotionRecurrenceRequest"]:c8(),["PromotionRuleGroupRequest"]:c9(),["PromotionRuleRequest"]:c10(),["PromotionRuleValueRequest"]:c11(),["PromotionScheduleRequest"]:c12(),["SharedCodec2451"]:c13(),["SharedCodec2457"]:c14(),["SharedCodec2458"]:c15(),["SharedCodec2459"]:c16(),["SharedCodec2460"]:c17(),["SharedCodec2461"]:c18(),["SharedCodec2464"]:c19(),["SharedCodec2465"]:c20(),["SharedCodec2466"]:c21(),["SharedCodec2467"]:c22(),["SharedCodec2468"]:c23(),["SharedCodec2470"]:c24(),["SharedCodec2471"]:c25(),["SharedCodec2472"]:c26(),["SharedCodec2531"]:c27(),["SharedCodec2532"]:c28(),["SharedCodec2533"]:c29(),["SharedCodec2534"]:c30()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
