import * as React from 'react';
import { Outlet } from 'react-router-dom';

export function ContentFull() {
  return (
    <>
      <div data-testid="mcf" id="main-content-full" className="main-content">
        <Outlet />
      </div>
    </>
  );
}
