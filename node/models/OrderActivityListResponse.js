import { d77 as c0, d1797 as c1, d1796 as c2, d1817 as c3, d1818 as c4, d2131 as c5, d2132 as c6, d14 as c7, d1795 as c8, d1816 as c9, d223 as c10 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1818 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1818;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["OrderActivity"]:c3(),["OrderActivityListResponse"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec1"]:c7(),["SharedCodec485"]:c8(),["SharedCodec489"]:c9(),["SignedMoney"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderActivityListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
