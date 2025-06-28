'use client';

import { useWordStore } from "../../useWordStore";
export default function Home() {

  const { bears } = useWordStore();

  return (
    <div>
      {bears}
    </div>
  );
}
