import { d8286 as c0, d8288 as c1 } from '../descriptors/data/366.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7928 as c2 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8403 as c3, d8395 as c4, d8396 as c5, d8397 as c6, d8398 as c7 } from '../descriptors/data/372.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7750 as c8 } from '../descriptors/data/325.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7750 as d7750 } from '../descriptors/data/325.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7750;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteCorrectionRequestModel"]:c0(),["CreditNoteLineItemRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec3085"]:c3(),["SharedCodec615"]:c4(),["SharedCodec616"]:c5(),["SharedCodec617"]:c6(),["SharedCodec618"]:c7(),["UpdateCreditNoteRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCreditNoteRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
