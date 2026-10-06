import { d1956 as c0, d2330 as c1, d2329 as c2 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1956 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1956;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentClientAction"]:c0(),["StripePaymentClientAction"]:c1(),["StripeSetupIntentClientAction"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentClientAction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
