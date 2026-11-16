import { d1431 as c0, d1433 as c1 } from '../descriptors/data/68.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1431 as d1431 } from '../descriptors/data/68.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1431;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RotatePartnerAppSecretRequest"]:c0(),["RotateWebhookSecretRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRotatePartnerAppSecretRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
