import { d1820 as c0, d1821 as c1, d323 as c2, d1823 as c3, d1824 as c4, d2179 as c5, d14 as c6, d1822 as c7 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1821 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1821;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyMovementHistoryMeta"]:c0(),["MoneyMovementListMeta"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseWarning"]:c5(),["SharedCodec1"]:c6(),["SharedCodec467"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMoneyMovementListMeta(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
