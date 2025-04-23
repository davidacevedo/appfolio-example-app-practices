import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <div>
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
    <main>
      <Outlet />
    </main>
  </div>
);

export default Layout;
