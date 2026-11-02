import { d6840 as c0, d6841 as c1, d6842 as c2 } from '../descriptors/data/324.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6843 as c3 } from '../descriptors/data/325.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6798 as c4, d6799 as c5 } from '../descriptors/data/323.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d358 as c6 } from '../descriptors/data/20.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d358 as d358 } from '../descriptors/data/20.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d358;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCapabilities"]:c0(),["BuyerPauseCapability"]:c1(),["BuyerRetentionOffer"]:c2(),["BuyerSkipCapability"]:c3(),["CustomerAccountPresentationRequest"]:c4(),["CustomerAccountRouteTemplatesRequest"]:c5(),["CustomerAccountSettingsRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerAccountSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
