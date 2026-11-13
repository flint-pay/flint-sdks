import { d6842 as c0, d6843 as c4, d6844 as c7, d6845 as c11, d6846 as c12, d6838 as c13, d6839 as c14, d6840 as c15 } from '../descriptors/data/318.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6510 as c1, d6511 as c16 } from '../descriptors/data/297.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6795 as c2 } from '../descriptors/data/314.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5893 as c3 } from '../descriptors/data/264.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6797 as c5, d6798 as c6 } from '../descriptors/data/315.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6835 as c8, d6836 as c9, d6837 as c10 } from '../descriptors/data/317.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6795 as d6795 } from '../descriptors/data/314.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6795;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["DimensionsRequest"]:c1(),["FulfillmentPackagingRequest"]:c2(),["MetadataRequest"]:c3(),["ReturnShipmentLineItemAllocationRequest"]:c4(),["SharedCodec1554"]:c5(),["SharedCodec1555"]:c6(),["SharedCodec363"]:c7(),["SharedCodec741"]:c8(),["SharedCodec742"]:c9(),["SharedCodec743"]:c10(),["SharedCodec744"]:c11(),["SharedCodec745"]:c12(),["SharedCodec746"]:c13(),["SharedCodec747"]:c14(),["SinglePackageCreateRequest"]:c15(),["WeightRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentPackagingRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
