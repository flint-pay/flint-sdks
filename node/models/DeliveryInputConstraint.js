import { d612 as c0, d741 as c1, d77 as c2 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d612 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d612;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryInputConstraint"]:c0(),["DeliveryWindowResource"]:c1(),["MoneyValue"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryInputConstraint(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
