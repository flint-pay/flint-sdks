import { d8230 as c0, d8224 as c1, d8225 as c2 } from '../descriptors/data/359.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8235 as c3, d8236 as c4, d8237 as c5 } from '../descriptors/data/360.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8230 as d8230 } from '../descriptors/data/359.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8230;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutSubscriptionTermsRequest"]:c0(),["SharedCodec232"]:c1(),["SharedCodec233"]:c2(),["SharedCodec313"]:c3(),["SharedCodec314"]:c4(),["SubscriptionPlanChangeLineItemRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSubscriptionTermsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
