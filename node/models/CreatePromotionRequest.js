import { d366 as c0 } from '../descriptors/data/21.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8014 as c1 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c2 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8227 as c3 } from '../descriptors/data/359.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10375 as c4, d10376 as c5, d10378 as c6, d10379 as c7, d10380 as c8, d10381 as c9, d10382 as c10, d10383 as c11, d10384 as c12, d10385 as c13, d10388 as c14, d10389 as c15, d10390 as c16, d10391 as c17, d10392 as c18, d10395 as c24, d10396 as c25, d10397 as c26 } from '../descriptors/data/483.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9638 as c19, d9639 as c20, d9640 as c21 } from '../descriptors/data/440.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9641 as c22, d9642 as c23 } from '../descriptors/data/441.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10400 as c27, d10401 as c28, d10402 as c29, d10403 as c30 } from '../descriptors/data/484.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d366 as d366 } from '../descriptors/data/21.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d366;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["PlatformFeeMoney"]:c3(),["PromotionApplicationMethodRequest"]:c4(),["PromotionCodeRequest"]:c5(),["PromotionCombinesWithRequest"]:c6(),["PromotionExclusivityRequest"]:c7(),["PromotionRecurrenceRequest"]:c8(),["PromotionRuleGroupRequest"]:c9(),["PromotionRuleRequest"]:c10(),["PromotionRuleValueRequest"]:c11(),["PromotionScheduleRequest"]:c12(),["SharedCodec2420"]:c13(),["SharedCodec2426"]:c14(),["SharedCodec2427"]:c15(),["SharedCodec2428"]:c16(),["SharedCodec2429"]:c17(),["SharedCodec2430"]:c18(),["SharedCodec2433"]:c19(),["SharedCodec2434"]:c20(),["SharedCodec2435"]:c21(),["SharedCodec2436"]:c22(),["SharedCodec2437"]:c23(),["SharedCodec2439"]:c24(),["SharedCodec2440"]:c25(),["SharedCodec2441"]:c26(),["SharedCodec2500"]:c27(),["SharedCodec2501"]:c28(),["SharedCodec2502"]:c29(),["SharedCodec2503"]:c30()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
