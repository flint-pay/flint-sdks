import { d1911 as c0, d2426 as c1 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2426 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2426;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrganizationMembership"]:c0(),["TransferOrganizationOwnershipResult"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTransferOrganizationOwnershipResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
