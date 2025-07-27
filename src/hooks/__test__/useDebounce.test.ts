import { renderHook, act } from "@testing-library/react";

import useDebounce from "../useDebounse";

jest.useFakeTimers();

describe("useDebounce", () => {
  it("should debounce value change", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: "first", delay: 500 },
      }
    );

    expect(result.current).toBe("first");

    rerender({ value: "second", delay: 500 });

    expect(result.current).toBe("first");

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current).toBe("second");
  });

  it("should reset timeout if value changes before delay", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: "A", delay: 300 },
      }
    );

    expect(result.current).toBe("A");

    rerender({ value: "B", delay: 300 });

    act(() => {
      jest.advanceTimersByTime(150);
    });

    rerender({ value: "C", delay: 300 });

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(result.current).toBe("C");
  });
});
