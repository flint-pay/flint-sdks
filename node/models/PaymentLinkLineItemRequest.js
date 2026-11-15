import { d5784 as c0 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6129 as c1 } from '../descriptors/data/280.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7983 as c2 } from '../descriptors/data/385.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8008 as c3 } from '../descriptors/data/386.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8013 as c4, d8014 as c5, d8016 as c6, d8017 as c7, d8018 as c8, d8019 as c9, d8020 as c10 } from '../descriptors/data/387.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8025 as c11, d8026 as c12 } from '../descriptors/data/388.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8027 as c13, d8028 as c14 } from '../descriptors/data/389.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7983 as d7983 } from '../descriptors/data/385.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7983;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTaxRequest"]:c1(),["PaymentLinkLineItemRequest"]:c2(),["SharedCodec1185"]:c3(),["SharedCodec1190"]:c4(),["SharedCodec1191"]:c5(),["SharedCodec1193"]:c6(),["SharedCodec1194"]:c7(),["SharedCodec1195"]:c8(),["SharedCodec1196"]:c9(),["SharedCodec1197"]:c10(),["SharedCodec1202"]:c11(),["SharedCodec1203"]:c12(),["SharedCodec1204"]:c13(),["SharedCodec1205"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
