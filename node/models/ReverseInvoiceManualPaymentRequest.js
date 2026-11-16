import { d1408 as c0 } from '../descriptors/data/67.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1408 as d1408 } from '../descriptors/data/67.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1408;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReverseInvoiceManualPaymentRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReverseInvoiceManualPaymentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
