import { d1764 as c0, d323 as c1, d1820 as c2, d1821 as c3, d2162 as c4, d2163 as c5, d2168 as c6, d2170 as c7, d2245 as c8, d2246 as c9, d2180 as c10, d2275 as c11, d14 as c12, d1819 as c13, d2181 as c14 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1764 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1764;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ListReturnReceiptsResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnActor"]:c6(),["ReturnDisposition"]:c7(),["ReturnReceipt"]:c8(),["ReturnReceiptLineItem"]:c9(),["ReturnSourceSystem"]:c10(),["ReturnUnverifiedItem"]:c11(),["SharedCodec1"]:c12(),["SharedCodec466"]:c13(),["SharedCodec524"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeListReturnReceiptsResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
