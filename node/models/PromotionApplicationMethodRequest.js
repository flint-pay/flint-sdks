import { d7885 as c0 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8227 as c1 } from '../descriptors/data/359.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10375 as c2, d10380 as c3, d10381 as c4, d10382 as c5, d10383 as c6, d10385 as c7, d10388 as c8, d10389 as c9, d10390 as c10, d10391 as c11, d10392 as c12, d10395 as c18, d10396 as c19, d10397 as c20 } from '../descriptors/data/483.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9638 as c13, d9639 as c14, d9640 as c15 } from '../descriptors/data/440.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9641 as c16, d9642 as c17 } from '../descriptors/data/441.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10400 as c21, d10401 as c22, d10402 as c23, d10403 as c24 } from '../descriptors/data/484.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10375 as d10375 } from '../descriptors/data/483.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10375;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PlatformFeeMoney"]:c1(),["PromotionApplicationMethodRequest"]:c2(),["PromotionRecurrenceRequest"]:c3(),["PromotionRuleGroupRequest"]:c4(),["PromotionRuleRequest"]:c5(),["PromotionRuleValueRequest"]:c6(),["SharedCodec2420"]:c7(),["SharedCodec2426"]:c8(),["SharedCodec2427"]:c9(),["SharedCodec2428"]:c10(),["SharedCodec2429"]:c11(),["SharedCodec2430"]:c12(),["SharedCodec2433"]:c13(),["SharedCodec2434"]:c14(),["SharedCodec2435"]:c15(),["SharedCodec2436"]:c16(),["SharedCodec2437"]:c17(),["SharedCodec2439"]:c18(),["SharedCodec2440"]:c19(),["SharedCodec2441"]:c20(),["SharedCodec2500"]:c21(),["SharedCodec2501"]:c22(),["SharedCodec2502"]:c23(),["SharedCodec2503"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
