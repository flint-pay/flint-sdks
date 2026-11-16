import { d7994 as c0 } from '../descriptors/data/373.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c1 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7061 as c2, d7062 as c3, d7063 as c4, d7064 as c5, d7065 as c6, d7066 as c7, d7067 as c8 } from '../descriptors/data/321.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7994 as d7994 } from '../descriptors/data/373.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7994;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec1285"]:c2(),["SharedCodec1286"]:c3(),["SharedCodec1287"]:c4(),["SharedCodec1288"]:c5(),["SharedCodec1289"]:c6(),["SharedCodec1290"]:c7(),["SharedCodec1291"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleAmountSpecificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
