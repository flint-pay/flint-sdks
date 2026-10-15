import { d323 as c0, d1823 as c1, d1824 as c2, d2178 as c3, d2179 as c4, d2184 as c5, d2186 as c6, d2261 as c7, d2262 as c8, d2196 as c9, d2291 as c10, d14 as c11, d1822 as c12, d2197 as c13, d2578 as c14 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2578 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2578;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["ReturnActor"]:c5(),["ReturnDisposition"]:c6(),["ReturnReceipt"]:c7(),["ReturnReceiptLineItem"]:c8(),["ReturnSourceSystem"]:c9(),["ReturnUnverifiedItem"]:c10(),["SharedCodec1"]:c11(),["SharedCodec467"]:c12(),["SharedCodec529"]:c13(),["VerifyReturnReceiptLineItemResponse"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVerifyReturnReceiptLineItemResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
