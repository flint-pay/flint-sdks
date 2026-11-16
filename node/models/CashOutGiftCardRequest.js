import { d142 as c0 } from '../descriptors/data/6.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c1 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d142 as d142 } from '../descriptors/data/6.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d142;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CashOutGiftCardRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCashOutGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
