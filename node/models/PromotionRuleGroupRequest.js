import { d5790 as c0 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8216 as c1, d8217 as c2, d8218 as c3, d8221 as c4, d8222 as c5, d8223 as c6, d8224 as c7, d8225 as c8 } from '../descriptors/data/401.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8233 as c9, d8234 as c10, d8235 as c11, d8236 as c12 } from '../descriptors/data/402.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8216 as d8216 } from '../descriptors/data/401.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8216;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRuleGroupRequest"]:c1(),["PromotionRuleRequest"]:c2(),["PromotionRuleValueRequest"]:c3(),["SharedCodec1340"]:c4(),["SharedCodec1341"]:c5(),["SharedCodec1342"]:c6(),["SharedCodec1343"]:c7(),["SharedCodec1344"]:c8(),["SharedCodec1379"]:c9(),["SharedCodec1380"]:c10(),["SharedCodec1381"]:c11(),["SharedCodec1382"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
