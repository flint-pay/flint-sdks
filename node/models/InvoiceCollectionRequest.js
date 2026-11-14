import { d7155 as c0, d7160 as c2 } from '../descriptors/data/338.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7266 as c1 } from '../descriptors/data/343.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c3 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6215 as c4, d6216 as c5 } from '../descriptors/data/285.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7195 as c6, d7196 as c7, d7197 as c8, d7198 as c9, d7199 as c10, d7200 as c11, d7201 as c12 } from '../descriptors/data/340.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7155 as d7155 } from '../descriptors/data/338.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7155;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceCollectionRequest"]:c0(),["InvoicePaymentOptionLimitRequest"]:c1(),["InvoicePaymentPolicyRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec870"]:c4(),["SharedCodec871"]:c5(),["SharedCodec877"]:c6(),["SharedCodec878"]:c7(),["SharedCodec879"]:c8(),["SharedCodec880"]:c9(),["SharedCodec881"]:c10(),["SharedCodec882"]:c11(),["SharedCodec883"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceCollectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
