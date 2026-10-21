"use client";

import React from "react";
import { Property } from "@/types/property";
import { EnquiryForm } from "./EnquiryForm";

interface ScheduleVisitModalProps {
  property?: Property;
  onSuccess?: () => void;
  className?: string;
}

export function ScheduleVisitModal({ property, onSuccess, className }: ScheduleVisitModalProps) {
  return (
    <EnquiryForm
      property={property}
      initialMode="viewing"
      onSuccess={onSuccess}
      className={className}
    />
  );
}

export default ScheduleVisitModal;
