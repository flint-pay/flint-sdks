import { d8590 as c0 } from '../descriptors/data/422.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8590 as d8590 } from '../descriptors/data/422.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8590;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentSettingsPatch"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentSettingsPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
