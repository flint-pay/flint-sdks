import { d7992 as c0 } from '../descriptors/data/373.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7047 as c1, d7048 as c2, d7050 as c3, d7052 as c4 } from '../descriptors/data/320.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8007 as c5, d8008 as c6, d8009 as c7, d8010 as c8, d8011 as c9, d8012 as c10, d8013 as c11 } from '../descriptors/data/374.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7992 as d7992 } from '../descriptors/data/373.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7992;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueRequest"]:c0(),["SharedCodec1166"]:c1(),["SharedCodec1167"]:c2(),["SharedCodec1169"]:c3(),["SharedCodec1171"]:c4(),["SharedCodec1261"]:c5(),["SharedCodec1262"]:c6(),["SharedCodec1263"]:c7(),["SharedCodec1264"]:c8(),["SharedCodec1265"]:c9(),["SharedCodec1266"]:c10(),["SharedCodec1267"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
