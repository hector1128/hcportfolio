"use client";

import { useEffect, useState } from "react";

export default function PageLoad() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return loaded;
}
