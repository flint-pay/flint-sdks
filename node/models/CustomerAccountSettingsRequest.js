import { d8587 as c0, d8588 as c2, d8591 as c4, d8592 as c5 } from '../descriptors/data/421.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8637 as c1, d8639 as c3 } from '../descriptors/data/423.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d426 as c6 } from '../descriptors/data/26.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d426 as d426 } from '../descriptors/data/26.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d426;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCapabilitiesRequest"]:c0(),["BuyerPauseCapability"]:c1(),["BuyerRetentionOfferRequest"]:c2(),["BuyerSkipCapability"]:c3(),["CustomerAccountPresentationRequest"]:c4(),["CustomerAccountRouteTemplatesRequest"]:c5(),["CustomerAccountSettingsRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerAccountSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
