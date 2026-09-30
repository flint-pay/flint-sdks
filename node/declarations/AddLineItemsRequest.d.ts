
import type { CreateOrderLineItem } from './CreateOrderLineItem.js';

export type AddLineItemsRequest = { /** minItems: 1. */ "line_items": Array<CreateOrderLineItem>; };
