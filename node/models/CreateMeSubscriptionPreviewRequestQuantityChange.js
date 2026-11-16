import { d291 as c0 } from '../descriptors/data/15.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7572 as c1 } from '../descriptors/data/361.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d291 as d291 } from '../descriptors/data/15.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d291;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateMeSubscriptionPreviewRequestQuantityChange"]:c0(),["SubscriptionQuantityChangeLineItemRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeSubscriptionPreviewRequestQuantityChange(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
