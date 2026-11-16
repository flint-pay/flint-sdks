import { d8009 as c0 } from '../descriptors/data/386.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8009 as d8009 } from '../descriptors/data/386.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8009;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLinkCustomTextPatchRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkCustomTextPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
