import { d734 as c0, d736 as c1, d74 as c2, d1786 as c3, d1785 as c4, d2121 as c5, d2122 as c6, d13 as c7, d12 as c8, d733 as c9 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d736 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d736;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DemoSession"]:c0(),["DemoSessionResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec0"]:c7(),["SharedCodec1"]:c8(),["SharedCodec234"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDemoSessionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
