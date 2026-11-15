import { d5784 as c0 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6129 as c1 } from '../descriptors/data/280.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7982 as c2 } from '../descriptors/data/384.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8008 as c3 } from '../descriptors/data/386.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8013 as c4, d8014 as c5, d8016 as c6, d8017 as c7, d8018 as c8, d8019 as c9, d8020 as c10, d8021 as c11 } from '../descriptors/data/387.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8022 as c12, d8023 as c13, d8024 as c14 } from '../descriptors/data/388.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7982 as d7982 } from '../descriptors/data/384.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7982;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTaxRequest"]:c1(),["PaymentLinkLineItemPatchRequest"]:c2(),["SharedCodec1185"]:c3(),["SharedCodec1190"]:c4(),["SharedCodec1191"]:c5(),["SharedCodec1193"]:c6(),["SharedCodec1194"]:c7(),["SharedCodec1195"]:c8(),["SharedCodec1196"]:c9(),["SharedCodec1197"]:c10(),["SharedCodec1198"]:c11(),["SharedCodec1199"]:c12(),["SharedCodec1200"]:c13(),["SharedCodec1201"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
