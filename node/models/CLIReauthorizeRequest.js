import { d117 as c0 } from '../descriptors/data/5.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8498 as c1 } from '../descriptors/data/404.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d117 as d117 } from '../descriptors/data/5.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d117;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CLIReauthorizeRequest"]:c0(),["SharedCodec261"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCLIReauthorizeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
