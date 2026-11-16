import { d6548 as c0, d6549 as c1 } from '../descriptors/data/288.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6548 as d6548 } from '../descriptors/data/288.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6548;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["VoidPackageRequest"]:c0(),["VoidShipmentRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVoidPackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
