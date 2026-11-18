import { d7885 as c0 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10381 as c1, d10382 as c2, d10383 as c3, d10388 as c4, d10389 as c5, d10390 as c6, d10391 as c7, d10392 as c8 } from '../descriptors/data/483.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10400 as c9, d10401 as c10, d10402 as c11, d10403 as c12 } from '../descriptors/data/484.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10381 as d10381 } from '../descriptors/data/483.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10381;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRuleGroupRequest"]:c1(),["PromotionRuleRequest"]:c2(),["PromotionRuleValueRequest"]:c3(),["SharedCodec2426"]:c4(),["SharedCodec2427"]:c5(),["SharedCodec2428"]:c6(),["SharedCodec2429"]:c7(),["SharedCodec2430"]:c8(),["SharedCodec2500"]:c9(),["SharedCodec2501"]:c10(),["SharedCodec2502"]:c11(),["SharedCodec2503"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
