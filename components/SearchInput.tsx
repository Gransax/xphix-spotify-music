"use client";

import useDebounce from "@/hooks/useDebounce";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import qs from "query-string";
import Input from "./Input";

type Props = {};

const SearchInput = (props: Props) => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };
    const url = qs.stringifyUrl({
      url: "/search",
      query: query,
    });
    router.push(url);
  }, [debouncedValue, router]);

  return (
    <Input
      placeholder="What do you whant to listen to?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
