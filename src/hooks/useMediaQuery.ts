import { useCallback, useSyncExternalStore } from "react";

/** Phones, plus the tablet widths where the timeline already stacks (1024px). */
export const NARROW_VIEWPORT_QUERY = "(max-width: 1024px)";

export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback((onChange: () => void) => {
    const media = window.matchMedia(query);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [query]);

  const getSnapshot = useCallback(
    () => window.matchMedia(query).matches,
    [query]
  );

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
