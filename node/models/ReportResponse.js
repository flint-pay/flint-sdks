import { d74 as c0, d1784 as c1, d1783 as c2, d2101 as c3, d2103 as c4, d2118 as c5, d2119 as c6, d1514 as c7, d1516 as c8, d1515 as c9, d1517 as c10, d1518 as c11 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2103 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2103;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["Report"]:c3(),["ReportResponse"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec404"]:c7(),["SharedCodec405"]:c8(),["SharedCodec406"]:c9(),["SharedCodec407"]:c10(),["SharedCodec408"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReportResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
