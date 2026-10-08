import { d1990 as c0, d1992 as c1 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1990 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1990;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentMethodDomain"]:c0(),["PaymentMethodDomainPaymentOption"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentMethodDomain(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
