import { d7929 as c0 } from '../descriptors/data/370.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7849 as c1, d7845 as c3, d7846 as c4, d7847 as c5, d7850 as c8, d7851 as c9, d7852 as c10, d7848 as c11 } from '../descriptors/data/366.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1330 as c2 } from '../descriptors/data/64.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7952 as c6, d7953 as c7 } from '../descriptors/data/371.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1330 as d1330 } from '../descriptors/data/64.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1330;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["ReportInventoryTransferLossRequest"]:c2(),["SharedCodec1047"]:c3(),["SharedCodec1048"]:c4(),["SharedCodec1049"]:c5(),["SharedCodec2021"]:c6(),["SharedCodec2022"]:c7(),["SharedCodec385"]:c8(),["SharedCodec386"]:c9(),["SharedCodec387"]:c10(),["SharedCodec388"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReportInventoryTransferLossRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
