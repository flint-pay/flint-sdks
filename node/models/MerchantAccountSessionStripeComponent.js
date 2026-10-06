import { d1794 as c0, d1795 as c1, d1793 as c2 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1795 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1795;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSessionStripeCollectionOptions"]:c0(),["MerchantAccountSessionStripeComponent"]:c1(),["MerchantAccountSessionStripeRequirements"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionStripeComponent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
