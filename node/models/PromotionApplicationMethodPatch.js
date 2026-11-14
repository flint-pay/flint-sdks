import { d5790 as c0 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8209 as c1, d8216 as c2, d8217 as c3, d8218 as c4, d8220 as c5, d8221 as c6, d8222 as c7, d8223 as c8, d8224 as c9, d8225 as c10, d8226 as c11, d8227 as c12 } from '../descriptors/data/401.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7493 as c13 } from '../descriptors/data/359.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7494 as c14, d7495 as c15, d7496 as c16, d7497 as c17 } from '../descriptors/data/360.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8233 as c18, d8234 as c19, d8235 as c20, d8236 as c21 } from '../descriptors/data/402.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8209 as d8209 } from '../descriptors/data/401.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8209;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodPatch"]:c1(),["PromotionRuleGroupRequest"]:c2(),["PromotionRuleRequest"]:c3(),["PromotionRuleValueRequest"]:c4(),["SharedCodec1339"]:c5(),["SharedCodec1340"]:c6(),["SharedCodec1341"]:c7(),["SharedCodec1342"]:c8(),["SharedCodec1343"]:c9(),["SharedCodec1344"]:c10(),["SharedCodec1345"]:c11(),["SharedCodec1346"]:c12(),["SharedCodec1347"]:c13(),["SharedCodec1348"]:c14(),["SharedCodec1349"]:c15(),["SharedCodec1350"]:c16(),["SharedCodec1351"]:c17(),["SharedCodec1379"]:c18(),["SharedCodec1380"]:c19(),["SharedCodec1381"]:c20(),["SharedCodec1382"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
