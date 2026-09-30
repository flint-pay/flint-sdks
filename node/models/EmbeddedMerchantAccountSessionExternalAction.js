import { d713 as c0, d1615 as c1, d1616 as c2, d1617 as c3, d1618 as c4, d1619 as c5, d1649 as c6 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d713 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d713;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["EmbeddedMerchantAccountSessionExternalAction"]:c0(),["MerchantAccountSessionStripeCollectionOptions"]:c1(),["MerchantAccountSessionStripeComponentLaunch"]:c2(),["MerchantAccountSessionStripeComponentProps"]:c3(),["MerchantAccountSessionStripeLaunch"]:c4(),["MerchantAccountSessionStripeRequirements"]:c5(),["OnboardingExternalAction"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeEmbeddedMerchantAccountSessionExternalAction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
