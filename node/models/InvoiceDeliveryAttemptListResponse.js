import { d1654 as c0, d1655 as c1, d74 as c2, d1784 as c3, d1783 as c4, d2118 as c5, d2119 as c6 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1655 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1655;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceDeliveryAttempt"]:c0(),["InvoiceDeliveryAttemptListResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceDeliveryAttemptListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
