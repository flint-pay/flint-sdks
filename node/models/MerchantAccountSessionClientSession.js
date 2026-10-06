import { d1787 as c0, d1786 as c1, d1785 as c2, d1794 as c3, d1795 as c4, d1793 as c5 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1787 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1787;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSessionClientSession"]:c0(),["MerchantAccountSessionStripe"]:c1(),["MerchantAccountSessionStripeAccountSession"]:c2(),["MerchantAccountSessionStripeCollectionOptions"]:c3(),["MerchantAccountSessionStripeComponent"]:c4(),["MerchantAccountSessionStripeRequirements"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionClientSession(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
