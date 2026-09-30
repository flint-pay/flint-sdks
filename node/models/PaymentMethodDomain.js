import { d1796 as c0, d1798 as c1 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1796 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1796;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentMethodDomain"]:c0(),["PaymentMethodDomainPaymentOption"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentMethodDomain(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
