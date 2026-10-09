import { d722 as c0, d723 as c1, d724 as c2, d323 as c3, d1820 as c4, d1821 as c5, d2162 as c6, d2163 as c7, d15 as c8, d14 as c9, d1819 as c10 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d724 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d724;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DemoSession"]:c0(),["DemoSessionAPIKey"]:c1(),["DemoSessionResponse"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SharedCodec0"]:c8(),["SharedCodec1"]:c9(),["SharedCodec466"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDemoSessionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
