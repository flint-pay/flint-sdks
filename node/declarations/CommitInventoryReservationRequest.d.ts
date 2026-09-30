


export type CommitInventoryReservationRequest = { /** Reservation version the caller last read. Use an exact numeric string, not a floating-point number. Format: int64. */ "expected_version"?: string; "lines": Array<{ /** Line being transitioned. */ "inventory_reservation_line_id": string; /** Cumulative quantity that should be committed on this line. Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. minimum: 0. */ "target_committed_quantity": string; }>; };
