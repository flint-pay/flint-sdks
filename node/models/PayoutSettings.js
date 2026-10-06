import { d1818 as c0, d77 as c1, d1823 as c2, d1822 as c3, d2025 as c4, d14 as c5, d1821 as c6 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2025 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2025;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyMovementBlockedReason"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PayoutSettings"]:c4(),["SharedCodec1"]:c5(),["SharedCodec487"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutSettings(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
