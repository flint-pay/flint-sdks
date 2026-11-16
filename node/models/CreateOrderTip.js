import { d8060 as c0 } from '../descriptors/data/376.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6744 as c1 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c2 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7731 as c3 } from '../descriptors/data/360.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8089 as c4, d8090 as c5, d8091 as c6, d8092 as c7 } from '../descriptors/data/378.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8060 as d8060 } from '../descriptors/data/376.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8060;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderTip"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec175"]:c3(),["SharedCodec439"]:c4(),["SharedCodec440"]:c5(),["SharedCodec441"]:c6(),["SharedCodec442"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderTip(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
