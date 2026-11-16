import { d7929 as c0 } from '../descriptors/data/370.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7849 as c1, d7845 as c3, d7846 as c4, d7847 as c5, d7850 as c12, d7851 as c13, d7852 as c14, d7848 as c15 } from '../descriptors/data/366.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1301 as c2 } from '../descriptors/data/63.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7946 as c6, d7947 as c7, d7948 as c8, d7949 as c9, d7950 as c10, d7951 as c11 } from '../descriptors/data/371.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1301 as d1301 } from '../descriptors/data/63.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1301;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["ReceiveInventoryTransferRequest"]:c2(),["SharedCodec1047"]:c3(),["SharedCodec1048"]:c4(),["SharedCodec1049"]:c5(),["SharedCodec1957"]:c6(),["SharedCodec1958"]:c7(),["SharedCodec1959"]:c8(),["SharedCodec1960"]:c9(),["SharedCodec1961"]:c10(),["SharedCodec1962"]:c11(),["SharedCodec385"]:c12(),["SharedCodec386"]:c13(),["SharedCodec387"]:c14(),["SharedCodec388"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReceiveInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
