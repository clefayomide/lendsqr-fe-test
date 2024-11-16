// "use client";

import UsersList from "@/components/templates/member/users/users";
import React from "react";

export default async function Users() {
  const data = await fetch(
    "https://1366d4b0-22bb-4081-b105-a486bed0fc5d.mock.pstmn.io/users"
  );
  const res = await data.json();
  return <UsersList data={res} />;
}
