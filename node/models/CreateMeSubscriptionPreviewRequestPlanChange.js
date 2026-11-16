import { d290 as c0 } from '../descriptors/data/15.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6150 as c1, d6151 as c2 } from '../descriptors/data/280.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d290 as d290 } from '../descriptors/data/15.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d290;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateMeSubscriptionPreviewRequestPlanChange"]:c0(),["SharedCodec145"]:c1(),["SharedCodec146"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeSubscriptionPreviewRequestPlanChange(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
