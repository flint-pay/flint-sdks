import { d77 as c0, d1823 as c1, d1822 as c2, d1906 as c3, d2157 as c4, d2158 as c5, d14 as c6, d1821 as c7, d2389 as c8, d2390 as c9 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d2389 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2389;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["OrganizationMembership"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["SharedCodec1"]:c6(),["SharedCodec487"]:c7(),["TransferOrganizationOwnershipResponse"]:c8(),["TransferOrganizationOwnershipResult"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTransferOrganizationOwnershipResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
