import { d323 as c0, d1820 as c1, d1821 as c2, d1911 as c3, d2162 as c4, d2163 as c5, d14 as c6, d1819 as c7, d2425 as c8, d2426 as c9 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2425 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2425;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["OrganizationMembership"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["SharedCodec1"]:c6(),["SharedCodec466"]:c7(),["TransferOrganizationOwnershipResponse"]:c8(),["TransferOrganizationOwnershipResult"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTransferOrganizationOwnershipResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
