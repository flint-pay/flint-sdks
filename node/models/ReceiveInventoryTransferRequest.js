import { d7929 as c0 } from '../descriptors/data/367.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7849 as c1, d7845 as c3, d7846 as c4, d7847 as c5, d7850 as c12, d7851 as c13, d7852 as c14, d7848 as c15 } from '../descriptors/data/363.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d1301 as c2 } from '../descriptors/data/62.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7946 as c6, d7947 as c7, d7948 as c8, d7949 as c9, d7950 as c10, d7951 as c11 } from '../descriptors/data/368.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d1301 as d1301 } from '../descriptors/data/62.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1301;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["ReceiveInventoryTransferRequest"]:c2(),["SharedCodec1047"]:c3(),["SharedCodec1048"]:c4(),["SharedCodec1049"]:c5(),["SharedCodec1957"]:c6(),["SharedCodec1958"]:c7(),["SharedCodec1959"]:c8(),["SharedCodec1960"]:c9(),["SharedCodec1961"]:c10(),["SharedCodec1962"]:c11(),["SharedCodec385"]:c12(),["SharedCodec386"]:c13(),["SharedCodec387"]:c14(),["SharedCodec388"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReceiveInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
