import React, {useEffect} from 'react';

type Props = {
  numbers?: number[],
  strings?: string[],
  fun?: () => void,
  obj?: object,
  num?: number,
  str?: string,
}

const EMPTY_STRINGS: string[] = []
export default function Main(
  {
    numbers = [],
    strings = EMPTY_STRINGS,
    fun = () => undefined,
    obj = {},
    str = '',
    num = 0,
  }: Props
) {

  useEffect(() => {
    console.log('### useEffect triggered by "number[]" change')
  }, [numbers])

  useEffect(() => {
    console.log('### useEffect triggered by "function" change')
  }, [fun])

  useEffect(() => {
    console.log('### useEffect triggered by "object" change')
  }, [obj])

  useEffect(() => {
    console.log('### useEffect triggered by "string[]" change')
  }, [strings])

  useEffect(() => {
    console.log('### useEffect triggered by "string" change')
  }, [str])

  useEffect(() => {
    console.log('### useEffect triggered by "number" change')
  }, [num])

  return <div>Main</div>
};
