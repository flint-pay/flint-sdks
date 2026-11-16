import { d1445 as c0 } from '../descriptors/data/69.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1445 as d1445 } from '../descriptors/data/69.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1445;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SendOrderReceiptRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSendOrderReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
