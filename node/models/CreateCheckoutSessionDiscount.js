import { d8050 as c0 } from '../descriptors/data/349.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8216 as c1, d8217 as c2, d8218 as c3 } from '../descriptors/data/359.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8050 as d8050 } from '../descriptors/data/349.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8050;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCheckoutSessionDiscount"]:c0(),["PromotionRefInputPromotionCode"]:c1(),["PromotionRefInputPromotionID"]:c2(),["PromotionRefRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionDiscount(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
