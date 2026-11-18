import { d8224 as c0, d8225 as c1 } from '../descriptors/data/359.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8237 as c2 } from '../descriptors/data/360.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7628 as c3 } from '../descriptors/data/320.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7628 as d7628 } from '../descriptors/data/320.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7628;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec232"]:c0(),["SharedCodec233"]:c1(),["SubscriptionPlanChangeLineItemRequest"]:c2(),["SubscriptionPlanTermsRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanTermsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
