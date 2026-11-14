import { d5790 as c0 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1274 as c1 } from '../descriptors/data/62.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8215 as c2, d8216 as c3, d8217 as c4, d8218 as c5, d8221 as c6, d8222 as c7, d8223 as c8, d8224 as c9, d8225 as c10 } from '../descriptors/data/401.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7493 as c11 } from '../descriptors/data/359.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7494 as c12, d7495 as c13, d7496 as c14, d7497 as c15 } from '../descriptors/data/360.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8233 as c16, d8234 as c17, d8235 as c18, d8236 as c19 } from '../descriptors/data/402.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1274 as d1274 } from '../descriptors/data/62.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1274;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionPercentOffMethodRequest"]:c1(),["PromotionRecurrenceRequest"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec1340"]:c6(),["SharedCodec1341"]:c7(),["SharedCodec1342"]:c8(),["SharedCodec1343"]:c9(),["SharedCodec1344"]:c10(),["SharedCodec1347"]:c11(),["SharedCodec1348"]:c12(),["SharedCodec1349"]:c13(),["SharedCodec1350"]:c14(),["SharedCodec1351"]:c15(),["SharedCodec1379"]:c16(),["SharedCodec1380"]:c17(),["SharedCodec1381"]:c18(),["SharedCodec1382"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionPercentOffMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
