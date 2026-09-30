import { d391 as c0, d69 as c1, d387 as c2, d386 as c3, d385 as c4, d390 as c5, d389 as c6, d388 as c7 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d391 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d391;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePaymentIntentRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec139"]:c2(),["SharedCodec140"]:c3(),["SharedCodec141"]:c4(),["SharedCodec142"]:c5(),["SharedCodec143"]:c6(),["SharedCodec144"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
