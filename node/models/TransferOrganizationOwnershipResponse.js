import { d74 as c0, d1784 as c1, d1783 as c2, d1866 as c3, d2118 as c4, d2119 as c5, d2348 as c6, d2349 as c7 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2348 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2348;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["OrganizationMembership"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["TransferOrganizationOwnershipResponse"]:c6(),["TransferOrganizationOwnershipResult"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTransferOrganizationOwnershipResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
