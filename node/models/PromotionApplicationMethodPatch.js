import { d7885 as c0 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8227 as c1 } from '../descriptors/data/359.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10374 as c2, d10381 as c3, d10382 as c4, d10383 as c5, d10386 as c6, d10387 as c7, d10388 as c8, d10389 as c9, d10390 as c10, d10391 as c11, d10392 as c12, d10393 as c13, d10394 as c14 } from '../descriptors/data/483.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9638 as c15, d9639 as c16, d9640 as c17 } from '../descriptors/data/440.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9641 as c18, d9642 as c19 } from '../descriptors/data/441.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10400 as c20, d10401 as c21, d10402 as c22, d10403 as c23 } from '../descriptors/data/484.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10374 as d10374 } from '../descriptors/data/483.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10374;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PlatformFeeMoney"]:c1(),["PromotionApplicationMethodPatch"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec2424"]:c6(),["SharedCodec2425"]:c7(),["SharedCodec2426"]:c8(),["SharedCodec2427"]:c9(),["SharedCodec2428"]:c10(),["SharedCodec2429"]:c11(),["SharedCodec2430"]:c12(),["SharedCodec2431"]:c13(),["SharedCodec2432"]:c14(),["SharedCodec2433"]:c15(),["SharedCodec2434"]:c16(),["SharedCodec2435"]:c17(),["SharedCodec2436"]:c18(),["SharedCodec2437"]:c19(),["SharedCodec2500"]:c20(),["SharedCodec2501"]:c21(),["SharedCodec2502"]:c22(),["SharedCodec2503"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
