import { d8824 as c0, d8825 as c4, d8827 as c8, d8828 as c9, d8826 as c14, d8822 as c15 } from '../descriptors/data/395.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8496 as c1, d8497 as c16 } from '../descriptors/data/374.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8777 as c2 } from '../descriptors/data/391.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7857 as c3 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8779 as c5, d8780 as c6, d8781 as c7, d8782 as c10, d8783 as c11, d8784 as c12, d8785 as c13 } from '../descriptors/data/392.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8777 as d8777 } from '../descriptors/data/391.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8777;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["DimensionsRequest"]:c1(),["FulfillmentPackagingRequest"]:c2(),["MetadataRequest"]:c3(),["ReturnShipmentLineItemAllocationRequest"]:c4(),["SharedCodec1275"]:c5(),["SharedCodec1276"]:c6(),["SharedCodec1277"]:c7(),["SharedCodec1278"]:c8(),["SharedCodec1279"]:c9(),["SharedCodec1283"]:c10(),["SharedCodec1284"]:c11(),["SharedCodec2818"]:c12(),["SharedCodec2819"]:c13(),["SharedCodec521"]:c14(),["SinglePackageCreateRequest"]:c15(),["WeightRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentPackagingRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
