import * as React from 'react';
import type { RuntimePlugin } from '@ice/runtime/esm/types';

export default async ({ addProvider }) => {
  const LogProvider = ({ children }) => {
    React.useEffect(() => {
      console.log('模拟日志打印');
    }, [])

    return (
      <>{children}</>
    )
  }

  addProvider(LogProvider);
}
