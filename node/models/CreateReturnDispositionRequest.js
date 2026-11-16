import { d338 as c0 } from '../descriptors/data/21.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9151 as c1, d9152 as c2 } from '../descriptors/data/440.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6744 as c3 } from '../descriptors/data/300.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d338 as d338 } from '../descriptors/data/21.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d338;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnDispositionRequest"]:c0(),["CreateReturnDispositionRequestInspectionLine"]:c1(),["CreateReturnDispositionRequestReceiptLine"]:c2(),["MetadataRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnDispositionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
