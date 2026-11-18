import { d7885 as c0 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1652 as c1 } from '../descriptors/data/83.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10380 as c2, d10381 as c3, d10382 as c4, d10383 as c5, d10388 as c6, d10389 as c7, d10390 as c8, d10391 as c9, d10392 as c10 } from '../descriptors/data/483.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9638 as c11, d9639 as c12, d9640 as c13 } from '../descriptors/data/440.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9641 as c14, d9642 as c15 } from '../descriptors/data/441.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10400 as c16, d10401 as c17, d10402 as c18, d10403 as c19 } from '../descriptors/data/484.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1652 as d1652 } from '../descriptors/data/83.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1652;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionBuyXGetYMethodRequest"]:c1(),["PromotionRecurrenceRequest"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec2426"]:c6(),["SharedCodec2427"]:c7(),["SharedCodec2428"]:c8(),["SharedCodec2429"]:c9(),["SharedCodec2430"]:c10(),["SharedCodec2433"]:c11(),["SharedCodec2434"]:c12(),["SharedCodec2435"]:c13(),["SharedCodec2436"]:c14(),["SharedCodec2437"]:c15(),["SharedCodec2500"]:c16(),["SharedCodec2501"]:c17(),["SharedCodec2502"]:c18(),["SharedCodec2503"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionBuyXGetYMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
