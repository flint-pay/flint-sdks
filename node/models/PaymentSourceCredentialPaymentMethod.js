import { d1176 as c0 } from '../descriptors/data/58.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1176 as d1176 } from '../descriptors/data/58.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1176;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentSourceCredentialPaymentMethod"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentSourceCredentialPaymentMethod(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
