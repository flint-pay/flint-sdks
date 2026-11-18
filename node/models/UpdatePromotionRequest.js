import { d7885 as c0 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8227 as c1 } from '../descriptors/data/359.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10374 as c2, d10377 as c3, d10381 as c4, d10382 as c5, d10383 as c6, d10386 as c7, d10387 as c8, d10388 as c9, d10389 as c10, d10390 as c11, d10391 as c12, d10392 as c13, d10393 as c14, d10394 as c15 } from '../descriptors/data/483.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9638 as c16, d9639 as c17, d9640 as c18 } from '../descriptors/data/440.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9641 as c19, d9642 as c20 } from '../descriptors/data/441.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10400 as c21, d10401 as c22, d10402 as c23, d10403 as c24, d10404 as c27, d10405 as c28, d10406 as c29, d10407 as c30, d10408 as c31, d10409 as c32 } from '../descriptors/data/484.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8015 as c25 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8111 as c26 } from '../descriptors/data/353.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7777 as c33 } from '../descriptors/data/328.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7777 as d7777 } from '../descriptors/data/328.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7777;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PlatformFeeMoney"]:c1(),["PromotionApplicationMethodPatch"]:c2(),["PromotionCombinesWithPatch"]:c3(),["PromotionRuleGroupRequest"]:c4(),["PromotionRuleRequest"]:c5(),["PromotionRuleValueRequest"]:c6(),["SharedCodec2424"]:c7(),["SharedCodec2425"]:c8(),["SharedCodec2426"]:c9(),["SharedCodec2427"]:c10(),["SharedCodec2428"]:c11(),["SharedCodec2429"]:c12(),["SharedCodec2430"]:c13(),["SharedCodec2431"]:c14(),["SharedCodec2432"]:c15(),["SharedCodec2433"]:c16(),["SharedCodec2434"]:c17(),["SharedCodec2435"]:c18(),["SharedCodec2436"]:c19(),["SharedCodec2437"]:c20(),["SharedCodec2500"]:c21(),["SharedCodec2501"]:c22(),["SharedCodec2502"]:c23(),["SharedCodec2503"]:c24(),["SharedCodec3071"]:c25(),["SharedCodec3074"]:c26(),["SharedCodec3162"]:c27(),["SharedCodec3163"]:c28(),["SharedCodec3164"]:c29(),["SharedCodec3165"]:c30(),["SharedCodec3166"]:c31(),["SharedCodec3167"]:c32(),["UpdatePromotionRequest"]:c33()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
