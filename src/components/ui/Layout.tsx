import React, { useState } from "react";
import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-4 gap-4">{children}</div>;
}

export default Layout;
