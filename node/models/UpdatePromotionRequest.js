import { d5790 as c0 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8209 as c1, d8212 as c2, d8216 as c3, d8217 as c4, d8218 as c5, d8220 as c6, d8221 as c7, d8222 as c8, d8223 as c9, d8224 as c10, d8225 as c11, d8226 as c12, d8227 as c13 } from '../descriptors/data/401.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7493 as c14 } from '../descriptors/data/359.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7494 as c15, d7495 as c16, d7496 as c17, d7497 as c18 } from '../descriptors/data/360.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8233 as c19, d8234 as c20, d8235 as c21, d8236 as c22, d8237 as c25, d8238 as c26, d8239 as c27, d8240 as c28, d8241 as c29, d8242 as c30 } from '../descriptors/data/402.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5920 as c23 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6018 as c24 } from '../descriptors/data/274.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5685 as c31 } from '../descriptors/data/251.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5685 as d5685 } from '../descriptors/data/251.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5685;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodPatch"]:c1(),["PromotionCombinesWithPatch"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec1339"]:c6(),["SharedCodec1340"]:c7(),["SharedCodec1341"]:c8(),["SharedCodec1342"]:c9(),["SharedCodec1343"]:c10(),["SharedCodec1344"]:c11(),["SharedCodec1345"]:c12(),["SharedCodec1346"]:c13(),["SharedCodec1347"]:c14(),["SharedCodec1348"]:c15(),["SharedCodec1349"]:c16(),["SharedCodec1350"]:c17(),["SharedCodec1351"]:c18(),["SharedCodec1379"]:c19(),["SharedCodec1380"]:c20(),["SharedCodec1381"]:c21(),["SharedCodec1382"]:c22(),["SharedCodec1692"]:c23(),["SharedCodec1695"]:c24(),["SharedCodec1783"]:c25(),["SharedCodec1784"]:c26(),["SharedCodec1785"]:c27(),["SharedCodec1786"]:c28(),["SharedCodec1787"]:c29(),["SharedCodec1788"]:c30(),["UpdatePromotionRequest"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
