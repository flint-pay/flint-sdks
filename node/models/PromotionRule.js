import { d323 as c0, d424 as c1, d2097 as c2 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d424 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d424;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRule"]:c1(),["PromotionRuleValue"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRule(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
