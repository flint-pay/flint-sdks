import { d452 as c0, d323 as c1, d1823 as c2, d1824 as c3, d2178 as c4, d2179 as c5, d2184 as c6, d2186 as c7, d2261 as c8, d2262 as c9, d2196 as c10, d2291 as c11, d14 as c12, d1822 as c13, d2197 as c14, d2578 as c15 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d452 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d452;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReceiptResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnActor"]:c6(),["ReturnDisposition"]:c7(),["ReturnReceipt"]:c8(),["ReturnReceiptLineItem"]:c9(),["ReturnSourceSystem"]:c10(),["ReturnUnverifiedItem"]:c11(),["SharedCodec1"]:c12(),["SharedCodec467"]:c13(),["SharedCodec529"]:c14(),["VerifyReturnReceiptLineItemResponse"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReceiptResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
