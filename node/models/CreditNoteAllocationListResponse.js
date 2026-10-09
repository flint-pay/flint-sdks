import { d493 as c0, d494 as c1, d323 as c2, d1820 as c3, d1821 as c4, d2162 as c5, d2163 as c6, d14 as c7, d1819 as c8 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d494 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d494;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteAllocation"]:c0(),["CreditNoteAllocationListResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec1"]:c7(),["SharedCodec466"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreditNoteAllocationListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
