'use client'

import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import qs from "query-string";
import Input from "./Input";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>('');
  const deboncedValue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: deboncedValue,
    }

    const url = qs.stringifyUrl({
      url: '/search',
      query: query
    })

    router.push(url)
  }, [deboncedValue, router])
  
  return (
    <Input 
      placeholder="So, what do u want to listen to"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

export default SearchInput