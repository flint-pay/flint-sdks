import { d5060 as c0, d5061 as c1, d5062 as c2, d5063 as c3, d5067 as c4, d5068 as c5, d5069 as c6 } from '../descriptors/data/232.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d5069 as d5069 } from '../descriptors/data/232.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5069;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCapabilities"]:c0(),["BuyerPauseCapability"]:c1(),["BuyerRetentionOffer"]:c2(),["BuyerSkipCapability"]:c3(),["CustomerAccountPresentation"]:c4(),["CustomerAccountRouteTemplates"]:c5(),["CustomerAccountSettings"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerAccountSettings(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
