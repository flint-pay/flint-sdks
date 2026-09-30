import { d1610 as c0, d1612 as c1, d1614 as c2, d1615 as c3, d1616 as c4, d1617 as c5, d1618 as c6, d1619 as c7, d69 as c8, d1646 as c9, d1645 as c10, d1649 as c11, d1657 as c12, d1959 as c13, d1960 as c14, d1656 as c15, d1655 as c16 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1614 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1614;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSession"]:c0(),["MerchantAccountSessionEffectivePolicy"]:c1(),["MerchantAccountSessionResponse"]:c2(),["MerchantAccountSessionStripeCollectionOptions"]:c3(),["MerchantAccountSessionStripeComponentLaunch"]:c4(),["MerchantAccountSessionStripeComponentProps"]:c5(),["MerchantAccountSessionStripeLaunch"]:c6(),["MerchantAccountSessionStripeRequirements"]:c7(),["MoneyValue"]:c8(),["NextAction"]:c9(),["NextActionMerchantAccountSession"]:c10(),["OnboardingExternalAction"]:c11(),["OnboardingRequirements"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SharedCodec439"]:c15(),["SharedCodec440"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
