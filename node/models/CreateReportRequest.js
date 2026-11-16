import { d337 as c0 } from '../descriptors/data/21.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9140 as c1 } from '../descriptors/data/441.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9141 as c2 } from '../descriptors/data/442.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d337 as d337 } from '../descriptors/data/21.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d337;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReportRequest"]:c0(),["SharedCodec482"]:c1(),["SharedCodec483"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReportRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
