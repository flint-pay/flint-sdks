import { d415 as c0 } from '../descriptors/data/25.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8014 as c1 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10874 as c2 } from '../descriptors/data/512.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d415 as d415 } from '../descriptors/data/25.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d415;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionOfferRequest"]:c0(),["MetadataRequest"]:c1(),["SubscriptionIntervalOptionRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionOfferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
