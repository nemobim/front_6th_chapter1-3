import { useSyncExternalStore } from "react";
import type { createStorage } from "../createStorage";

type Storage<T> = ReturnType<typeof createStorage<T>>;

export const useStorage = <T>(storage: Storage<T>) => {
  // useSyncExternalStore를 사용해서 storage의 상태를 구독하고 가져오는 훅을 구현해보세요.

  const state = useSyncExternalStore(
    subscribe,             // 상태 변경을 구독하는 함수
    getSnapshot,           // 현재 상태 값을 반환하는 함수 (클라이언트)
    getServerSnapshot?     // (선택) 서버에서 사용할 상태 반환 함수
  );

  
  return storage.get();
};
