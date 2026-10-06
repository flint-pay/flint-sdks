import { d77 as c0, d1823 as c1, d1822 as c2, d2157 as c3, d2158 as c4, d2276 as c5, d2277 as c6, d14 as c7, d1821 as c8 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2276 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2276;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["RevokeOrganizationMembershipResponse"]:c5(),["RevokeOrganizationMembershipResult"]:c6(),["SharedCodec1"]:c7(),["SharedCodec487"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeOrganizationMembershipResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
