import { d7994 as c0, d7995 as c1, d7996 as c2 } from '../descriptors/data/373.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c3 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7061 as c4, d7062 as c5, d7063 as c6, d7064 as c7, d7065 as c8, d7066 as c9, d7067 as c10 } from '../descriptors/data/321.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8014 as c11, d8015 as c12, d8016 as c13, d8017 as c14, d8018 as c15, d8019 as c16, d8020 as c17, d8021 as c18, d8022 as c19, d8023 as c20, d8024 as c21 } from '../descriptors/data/374.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8025 as c22, d8026 as c23, d8027 as c24, d8028 as c25, d8029 as c26, d8030 as c27, d8031 as c28 } from '../descriptors/data/375.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7996 as d7996 } from '../descriptors/data/373.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7996;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWrite"]:c2(),["MoneyValue"]:c3(),["SharedCodec1285"]:c4(),["SharedCodec1286"]:c5(),["SharedCodec1287"]:c6(),["SharedCodec1288"]:c7(),["SharedCodec1289"]:c8(),["SharedCodec1290"]:c9(),["SharedCodec1291"]:c10(),["SharedCodec1295"]:c11(),["SharedCodec1296"]:c12(),["SharedCodec1297"]:c13(),["SharedCodec1298"]:c14(),["SharedCodec1299"]:c15(),["SharedCodec1300"]:c16(),["SharedCodec1301"]:c17(),["SharedCodec1302"]:c18(),["SharedCodec1303"]:c19(),["SharedCodec1304"]:c20(),["SharedCodec1305"]:c21(),["SharedCodec1306"]:c22(),["SharedCodec1307"]:c23(),["SharedCodec1308"]:c24(),["SharedCodec1309"]:c25(),["SharedCodec1310"]:c26(),["SharedCodec1311"]:c27(),["SharedCodec1312"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
