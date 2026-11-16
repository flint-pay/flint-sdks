import { d1318 as c0 } from '../descriptors/data/63.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7910 as c1, d7911 as c2 } from '../descriptors/data/369.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1318 as d1318 } from '../descriptors/data/63.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1318;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReleaseInventoryReservationRequest"]:c0(),["SharedCodec1993"]:c1(),["SharedCodec1994"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReleaseInventoryReservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
