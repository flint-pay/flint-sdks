import { d9367 as c0, d9368 as c17, d9369 as c18 } from '../descriptors/data/426.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8003 as c1 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8416 as c2, d8417 as c3, d8418 as c4, d8419 as c5, d8420 as c6, d8421 as c7, d8422 as c8, d8423 as c9, d8424 as c10, d8425 as c11, d8426 as c12, d8427 as c13, d8428 as c14, d8429 as c15, d8430 as c16 } from '../descriptors/data/374.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d7844 as c19 } from '../descriptors/data/332.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d7844 as d7844 } from '../descriptors/data/332.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7844;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec120"]:c2(),["SharedCodec121"]:c3(),["SharedCodec122"]:c4(),["SharedCodec123"]:c5(),["SharedCodec1665"]:c6(),["SharedCodec1666"]:c7(),["SharedCodec1667"]:c8(),["SharedCodec1668"]:c9(),["SharedCodec1669"]:c10(),["SharedCodec1670"]:c11(),["SharedCodec1671"]:c12(),["SharedCodec1672"]:c13(),["SharedCodec1673"]:c14(),["SharedCodec1674"]:c15(),["SharedCodec1675"]:c16(),["SharedCodec3160"]:c17(),["SharedCodec3161"]:c18(),["UpdateInvoicePaymentTermRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
