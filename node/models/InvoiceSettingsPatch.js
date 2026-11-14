import { d7266 as c0 } from '../descriptors/data/343.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8660 as c1 } from '../descriptors/data/426.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d921 as c2 } from '../descriptors/data/46.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c3 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6019 as c4, d6020 as c5 } from '../descriptors/data/274.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8603 as c6 } from '../descriptors/data/424.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6315 as c7, d6316 as c8 } from '../descriptors/data/290.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8638 as c9, d8639 as c10, d8640 as c11, d8641 as c12, d8642 as c13 } from '../descriptors/data/425.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d921 as d921 } from '../descriptors/data/46.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d921;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentOptionLimitRequest"]:c0(),["InvoiceReminderRule"]:c1(),["InvoiceSettingsPatch"]:c2(),["MoneyValue"]:c3(),["SharedCodec0"]:c4(),["SharedCodec1"]:c5(),["SharedCodec1000"]:c6(),["SharedCodec1001"]:c7(),["SharedCodec1002"]:c8(),["SharedCodec995"]:c9(),["SharedCodec996"]:c10(),["SharedCodec997"]:c11(),["SharedCodec998"]:c12(),["SharedCodec999"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceSettingsPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
