import { d4069 as c0 } from '../descriptors/data/173.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3997 as c1, d3998 as c3, d3999 as c4, d4000 as c5, d3996 as c6, d3993 as c7, d3994 as c8, d3995 as c9 } from '../descriptors/data/169.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d702 as c2 } from '../descriptors/data/30.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4095 as c10, d4096 as c11, d4097 as c12, d4098 as c13, d4099 as c14, d4100 as c15, d4101 as c16, d4102 as c17, d4103 as c18, d4104 as c19, d4105 as c20, d4106 as c21, d4107 as c22, d4108 as c23, d4109 as c24, d4110 as c25, d4111 as c26, d4112 as c27, d4113 as c28 } from '../descriptors/data/174.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d702 as d702 } from '../descriptors/data/30.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d702;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["InventoryTransferTransitionRequest"]:c2(),["SharedCodec142"]:c3(),["SharedCodec143"]:c4(),["SharedCodec144"]:c5(),["SharedCodec145"]:c6(),["SharedCodec832"]:c7(),["SharedCodec833"]:c8(),["SharedCodec834"]:c9(),["SharedCodec861"]:c10(),["SharedCodec862"]:c11(),["SharedCodec863"]:c12(),["SharedCodec864"]:c13(),["SharedCodec865"]:c14(),["SharedCodec866"]:c15(),["SharedCodec867"]:c16(),["SharedCodec868"]:c17(),["SharedCodec869"]:c18(),["SharedCodec870"]:c19(),["SharedCodec871"]:c20(),["SharedCodec872"]:c21(),["SharedCodec873"]:c22(),["SharedCodec874"]:c23(),["SharedCodec875"]:c24(),["SharedCodec876"]:c25(),["SharedCodec877"]:c26(),["SharedCodec878"]:c27(),["SharedCodec879"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryTransferTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
