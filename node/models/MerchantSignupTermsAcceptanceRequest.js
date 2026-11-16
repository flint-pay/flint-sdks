import { d7625 as c0 } from '../descriptors/data/364.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7625 as d7625 } from '../descriptors/data/364.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7625;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantSignupTermsAcceptanceRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantSignupTermsAcceptanceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
