import { d4084 as c0 } from '../descriptors/data/174.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4012 as c1, d4013 as c3, d4014 as c4, d4015 as c5, d4011 as c6, d4008 as c7, d4009 as c8, d4010 as c9 } from '../descriptors/data/170.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d705 as c2 } from '../descriptors/data/30.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4110 as c10, d4111 as c11, d4112 as c12, d4113 as c13, d4114 as c14, d4115 as c15, d4116 as c16, d4117 as c17, d4118 as c18, d4119 as c19, d4120 as c20, d4121 as c21, d4122 as c22, d4123 as c23, d4124 as c24, d4125 as c25, d4126 as c26, d4127 as c27, d4128 as c28 } from '../descriptors/data/175.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d705 as d705 } from '../descriptors/data/30.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d705;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["InventoryTransferTransitionRequest"]:c2(),["SharedCodec147"]:c3(),["SharedCodec148"]:c4(),["SharedCodec149"]:c5(),["SharedCodec150"]:c6(),["SharedCodec837"]:c7(),["SharedCodec838"]:c8(),["SharedCodec839"]:c9(),["SharedCodec866"]:c10(),["SharedCodec867"]:c11(),["SharedCodec868"]:c12(),["SharedCodec869"]:c13(),["SharedCodec870"]:c14(),["SharedCodec871"]:c15(),["SharedCodec872"]:c16(),["SharedCodec873"]:c17(),["SharedCodec874"]:c18(),["SharedCodec875"]:c19(),["SharedCodec876"]:c20(),["SharedCodec877"]:c21(),["SharedCodec878"]:c22(),["SharedCodec879"]:c23(),["SharedCodec880"]:c24(),["SharedCodec881"]:c25(),["SharedCodec882"]:c26(),["SharedCodec883"]:c27(),["SharedCodec884"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryTransferTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
