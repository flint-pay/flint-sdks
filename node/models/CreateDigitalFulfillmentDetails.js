import { d7660 as c0 } from '../descriptors/data/355.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7660 as d7660 } from '../descriptors/data/355.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7660;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDigitalFulfillmentDetails"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDigitalFulfillmentDetails(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
