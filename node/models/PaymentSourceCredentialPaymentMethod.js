import { d1176 as c0 } from '../descriptors/data/59.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1176 as d1176 } from '../descriptors/data/59.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1176;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentSourceCredentialPaymentMethod"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentSourceCredentialPaymentMethod(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
