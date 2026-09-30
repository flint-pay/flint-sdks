import { d1610 as c0, d1612 as c1, d1615 as c2, d1616 as c3, d1617 as c4, d1618 as c5, d1619 as c6, d1649 as c7, d1657 as c8, d1656 as c9, d1655 as c10 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1610 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1610;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSession"]:c0(),["MerchantAccountSessionEffectivePolicy"]:c1(),["MerchantAccountSessionStripeCollectionOptions"]:c2(),["MerchantAccountSessionStripeComponentLaunch"]:c3(),["MerchantAccountSessionStripeComponentProps"]:c4(),["MerchantAccountSessionStripeLaunch"]:c5(),["MerchantAccountSessionStripeRequirements"]:c6(),["OnboardingExternalAction"]:c7(),["OnboardingRequirements"]:c8(),["SharedCodec439"]:c9(),["SharedCodec440"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSession(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
