import { d7929 as c0 } from '../descriptors/data/370.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7849 as c1, d7845 as c2, d7846 as c3, d7847 as c4, d7850 as c5, d7851 as c6, d7852 as c7, d7848 as c8 } from '../descriptors/data/366.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7929 as d7929 } from '../descriptors/data/370.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7929;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["SharedCodec1047"]:c2(),["SharedCodec1048"]:c3(),["SharedCodec1049"]:c4(),["SharedCodec385"]:c5(),["SharedCodec386"]:c6(),["SharedCodec387"]:c7(),["SharedCodec388"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryProvenanceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
