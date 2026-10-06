import { d1739 as c0, d77 as c1, d1797 as c2, d1796 as c3, d2131 as c4, d2132 as c5, d2137 as c6, d2139 as c7, d2214 as c8, d2215 as c9, d2149 as c10, d2216 as c11, d14 as c12, d1795 as c13, d2150 as c14 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1739 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1739;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ListReturnReceiptsResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnActor"]:c6(),["ReturnDisposition"]:c7(),["ReturnReceipt"]:c8(),["ReturnReceiptLineItem"]:c9(),["ReturnSourceSystem"]:c10(),["ReturnUnverifiedItem"]:c11(),["SharedCodec1"]:c12(),["SharedCodec485"]:c13(),["SharedCodec545"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeListReturnReceiptsResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
