import { d8617 as c0, d8618 as c2, d8621 as c4, d8622 as c5 } from '../descriptors/data/424.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8667 as c1, d8669 as c3 } from '../descriptors/data/426.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d427 as c6 } from '../descriptors/data/26.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d427 as d427 } from '../descriptors/data/26.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d427;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCapabilitiesRequest"]:c0(),["BuyerPauseCapability"]:c1(),["BuyerRetentionOfferRequest"]:c2(),["BuyerSkipCapability"]:c3(),["CustomerAccountPresentationRequest"]:c4(),["CustomerAccountRouteTemplatesRequest"]:c5(),["CustomerAccountSettingsRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerAccountSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
