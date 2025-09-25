import { useState } from "react";

/**
 * useSelected is a generic React hook for managing the state of a selected item.
 * It returns the selected value and a setter function, making selection logic reusable for any type.
 */
export default function useSelected<T>() {
  const [selected, setSelected] = useState<T | null>(null);
  return [selected, setSelected] as const;
}