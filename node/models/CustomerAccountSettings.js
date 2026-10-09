import { d65 as c0, d99 as c1, d104 as c2, d105 as c3, d515 as c4, d516 as c5, d517 as c6 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d517 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d517;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCapabilities"]:c0(),["BuyerPauseCapability"]:c1(),["BuyerRetentionOffer"]:c2(),["BuyerSkipCapability"]:c3(),["CustomerAccountPresentation"]:c4(),["CustomerAccountRouteTemplates"]:c5(),["CustomerAccountSettings"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerAccountSettings(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
